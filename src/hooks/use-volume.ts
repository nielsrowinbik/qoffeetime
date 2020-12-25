import { useRouter } from "next/router";
import { useEffect } from "react";

import { minmax } from "../utils/helpers";
import type { Recipe } from "../utils/types";

export const useVolume = (recipe: Recipe, pathname: string) => {
    const router = useRouter();
    const { volume: volumeStr } = router.query;

    // Parse volume from the URL and check correctness:
    const volume = parseInt(volumeStr as string);
    const isValid =
        !Number.isNaN(volume) &&
        volume <= recipe.maxWater &&
        volume >= recipe.minWater;

    // Correct the volume in the URL if it's outside the volume range set by the recipe:
    useEffect(() => {
        if (isValid) return;

        const actual = volume;
        const corrected = Number.isNaN(actual)
            ? recipe.defaultVolume
            : minmax(actual, recipe.minWater, recipe.maxWater);

        router.replace(
            {
                pathname,
                query: {
                    volume: corrected,
                },
            },
            undefined,
            { shallow: true }
        );
    }, [isValid]);

    return {
        isValid,
        volume,
    };
};
