export type RecipeStep = {
    description: string;
    duration: number;
};

export type Recipe = {
    name: string;
    tagline: string;
    description: string;
    minWater: number;
    maxWater: number;
    defaultRatio: number;
    steps: RecipeStep[];
};
