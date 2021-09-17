export type RecipeStep = {
    description: string;
    duration: number;
    target?: string;
};

export type ParsedRecipeStep = RecipeStep & {
    start: number;
    target: number;
    toAdd: number;
};

export type RecipeFromFile = {
    name: string;
    tagline: string;
    description: string;
    maxOutput: number;
    minOutput: number;
    defaultRatio: number;
    steps: RecipeStep[];
};

export type Recipe = RecipeFromFile & {
    slug: string;
};
