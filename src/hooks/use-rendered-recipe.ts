import template from "lodash.template";

import type { Recipe } from "../utils/types";

export const useRenderedRecipe = (recipe: Recipe, volume: number): Recipe => {
    const vars = {
        coffee: Math.round((recipe.ratio / 1000) * volume),
        volume,
    };

    const rendered = {
        ...recipe,
        steps: recipe.steps.map((step) => ({
            ...step,
            description: template(step.description)(vars),
        })),
    };

    return rendered;
};
