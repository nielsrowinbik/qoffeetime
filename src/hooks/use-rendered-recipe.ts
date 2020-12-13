import template from "lodash.template";
import { useMemo } from "react";

import type { Recipe } from "../utils/types";

export const useRenderedRecipe = (recipe: Recipe, volume: number): Recipe => {
    const vars = useMemo(
        () => ({
            coffee: (recipe.ratio / 1000) * volume,
            volume,
        }),
        [recipe, volume]
    );

    const rendered = useMemo(
        () => ({
            ...recipe,
            steps: recipe.steps.map((step) => ({
                ...step,
                description: template(step.description)(vars),
            })),
        }),
        [recipe, volume]
    );

    return rendered;
};
