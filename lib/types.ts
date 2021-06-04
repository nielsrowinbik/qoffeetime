export type RecipeStep = {
    description: string;
    duration: number;
};

export type RecipeFromFile = {
    name: string;
    tagline: string;
    image: string;
    description: string;
    maxVolume: number;
    minVolume: number;
    defaultVolume: number;
    defaultRatio: number;
    steps: RecipeStep[];
};

export type Recipe = RecipeFromFile & {
    slug: string;
};

export type Brew = {
    id?: number;
    created?: number;
    coffee: number;
    recipe: string;
    volume: number;
};
