export type Brew = {
    coffee: number;
    created?: Date;
    id?: number;
    recipe: string;
    volume: number;
};

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
    defaultVolume: number;
    ratio: number;
    steps: RecipeStep[];
};

export type Recipies = {
    [slug: string]: Recipe;
};

export type RecipeProps = {
    recipe: Recipe;
};

export type RecipiesProps = {
    recipies: Recipies;
};

export type UserBrew = Brew;
