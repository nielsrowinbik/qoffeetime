import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
} from 'react';
import { useRouter } from 'next/router';

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
    const { locale } = useRouter();

    // No brews stored? Just return the original array (which is sorted alphabetically):
    if (brews.length === 0) return { isReady, recipies };

    // Count the occurrance for each recipe (not counting recipies that no longer exist):
    const counted = brews.reduce((res, { recipe }) => {
        res[recipe] = ~~res[recipe] + 1;
        return res;
    }, {});

    const sorted = [...recipies].sort((a, b) => {
        // If the first one is the most recent brew, prefer it:
        if (a.name === brews[0].recipe) {
            return -1;
        }

        // If the second one is the most recent brew, prefer it:
        if (b.name === brews[0].recipe) {
            return 1;
        }

        const countA = counted[a.name];
        const countB = counted[b.name];

        // Both recipies were logged, so compare their numbers:
        if (!!countA && !!countB) {
            return countB - countA;
        }

        // Only the first was logged, prefer it:
        if (!!countA && !countB) {
            return -1;
        }

        // Only the second was logged, prefer it:
        if (!!countB && !countA) {
            return 1;
        }

        // None of them were logged, so compare alphabetically
        return a.name.localeCompare(b.name, locale);
    });

    return {
        isReady,
        recipies: sorted,
    };
};
