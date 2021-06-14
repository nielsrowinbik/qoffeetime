import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
} from 'react';

import type { PropsWithChildren } from 'react';
import type { Brew, Recipe } from './types';

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

export const useSortRecipiesByBrews = (
    recipies: Recipe[]
): { isReady: boolean; recipies: Recipe[] } => {
    const { isReady, brews } = useBrews();

    // No brews stored? Just return the original array (which is sorted alphabetically):
    if (brews.length === 0) return { isReady, recipies };

    // Count the occurrance for each recipe:
    const counted = brews.reduce((res, { recipe }) => {
        res[recipe] = ~~res[recipe] + 1;
        return res;
    }, {});

    // Find the most recently used recipe:
    const mostRecent = recipies.find(({ name }) => name === brews[0].recipe);

    // Create a list of recipies, sored by usage, omitting
    // the most recently used:
    const ordered = Object.keys(counted)
        .filter((name) => name !== mostRecent.name)
        .sort((a, b) => counted[b] - counted[a])
        .map((name) => recipies.find((recipe) => recipe.name === name));

    // Create a list of the remaining recipe names, sorted alphabetically:
    const remaining = recipies.filter(
        ({ name }) =>
            name !== mostRecent.name &&
            !ordered.find((recipe) => recipe.name === name)
    );

    // Create a new array, in which the first item is always the most recently
    // used recipe, which then contains the remainder of the recipies, first sorted by usage,
    // and sorted alphabetically if it hasn't been logged yet, and return it:
    return {
        isReady,
        recipies: [mostRecent, ...ordered, ...remaining],
    };
};
