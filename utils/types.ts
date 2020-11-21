export type RecipeStep = {
    description: string;
    duration: number;
};

export type Recipe = {
    name: string;
    tagline: string;
    description: string;
    image: string;
    minWater: number;
    maxWater: number;
    defaultRatio: number;
    defaultVolume: number;
    steps: RecipeStep[];
};

export type Recipies = {
    [slug: string]: Recipe;
};
