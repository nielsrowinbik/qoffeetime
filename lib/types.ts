export type LocalizedString =
    | string
    | {
          [locale: string]: string;
      };

export type RecipeStep = {
    description: string;
    duration: number;
    target?: string;
};

export type RecipeStepFromFile = {
    description: LocalizedString;
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
    tagline: LocalizedString;
    description: LocalizedString;
    maxVolume: number;
    minVolume: number;
    defaultVolume: number;
    defaultRatio: number;
    steps: RecipeStepFromFile[];
};

export type TranslatedRecipeFromFile = {
    name: string;
    tagline: string;
    description: string;
    maxVolume: number;
    minVolume: number;
    defaultVolume: number;
    defaultRatio: number;
    steps: RecipeStep[];
};

export type Recipe = TranslatedRecipeFromFile & {
    slug: string;
};

export type Brew = {
    id?: number;
    created?: number;
    coffee: number;
    comment?: string;
    recipe: string;
    volume: number;
};
