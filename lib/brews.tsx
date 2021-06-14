import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
} from 'react';

import type { PropsWithChildren } from 'react';
import type { Brew } from './types';

import { db } from './db';

type BrewsContext = {
    isReady: boolean;
    brews: Brew[];
    getBrew(id: number): Promise<Brew | undefined>;
    createBrew(values: Brew): Promise<Brew>;
    deleteBrew(brewId: number): Promise<void>;
    updateBrew(brewId: number, values: Partial<Brew>): Promise<Brew>;
};

export const BrewsContext = createContext<BrewsContext>(undefined);

export const ProvideBrewsContext = ({ children }: PropsWithChildren<{}>) => {
    const [isReady, setIsReady] = useState(false);
    const [brews, setBrews] = useState<Brew[]>([]);

    const getBrew = useCallback(async (id: number) => {
        return db.get(id);
    }, []);

    const createBrew = useCallback(async (values: Brew) => {
        const result = await db.create(values);
        refresh();
        return result;
    }, []);

    const deleteBrew = useCallback(async (brewId: number) => {
        await db.remove(brewId);
        refresh();
    }, []);

    const updateBrew = useCallback(
        async (brewId: number, values: Partial<Brew>) => {
            const result = await db.update(brewId, values);
            refresh();
            return result;
        },
        []
    );

    const refresh = async () => {
        const brews = await db.list();
        setBrews(brews);
        setIsReady(true);
    };

    useEffect(() => {
        refresh();
    }, []);

    const ctx = {
        isReady,
        brews,
        getBrew,
        createBrew,
        deleteBrew,
        updateBrew,
    };

    return (
        <BrewsContext.Provider value={ctx}>{children}</BrewsContext.Provider>
    );
};

export const useBrews = () => {
    const ctx = useContext(BrewsContext);
    if (ctx === undefined) {
        throw new Error(
            'Brews Context must be used within ProvideBrewsContext'
        );
    }
    return ctx;
};
