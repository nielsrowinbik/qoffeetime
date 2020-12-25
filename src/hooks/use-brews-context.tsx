import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
} from "react";

import { db } from "../db";

import type { Brew, UserBrew } from "../utils/types";

export interface BrewsContext {
    brews: Brew[];
    getBrew(id: number): Promise<Brew | undefined>;
    createBrew(values: UserBrew): Promise<Brew>;
    deleteBrew(brewId: number): Promise<void>;
}

export const BrewsContext = createContext<BrewsContext>(undefined);

export const ProvideBrewsContext: React.FC = ({ children }) => {
    const [brews, setBrews] = useState<Brew[]>([]);

    const getBrew = useCallback(async (id: number) => {
        return db.get(id);
    }, []);

    const createBrew = useCallback(async (values: UserBrew) => {
        const result = await db.create({
            ...values,
            created: new Date(),
        });
        setBrews((previous) => [result, ...previous]);
        return result;
    }, []);

    const deleteBrew = useCallback(async (brewId: number) => {
        await db.remove(brewId);
        setBrews((previous) => previous.filter((brew) => brew.id !== brewId));
    }, []);

    useEffect(() => {
        const refresh = async () => {
            const brews = await db.list();
            setBrews(brews);
        };
        refresh();
    }, []);

    const ctx = {
        brews,
        getBrew,
        createBrew,
        deleteBrew,
    };

    return (
        <BrewsContext.Provider value={ctx}>{children}</BrewsContext.Provider>
    );
};

export const useBrews = () => {
    const ctx = useContext(BrewsContext);
    if (ctx === undefined) {
        throw new Error(
            "Brews Context must be used within ProvideBrewsContext"
        );
    }
    return ctx;
};
