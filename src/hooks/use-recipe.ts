import { useMemo } from "react";

import recipies from "../recipies";

import type { Recipe } from "../utils/types";

// TODO: Find a way to expose some variables to the step's descriptions, see https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused

export const useRecipe = (slug: string): Recipe | undefined => {
    return recipies[slug];
};
