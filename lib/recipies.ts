import fs from 'fs';
import path from 'path';

import type {
    Recipe,
    RecipeFromFile,
    RecipeStep,
    RecipeStepFromFile,
    TranslatedRecipeFromFile,
} from '../lib/types';

const root = process.cwd();

export const getRecipeFiles = async () =>
    fs.readdirSync(path.join(root, 'data', 'recipies'));

export const getRecipeBySlug = async (
    slug: string,
    locale: string
): Promise<Recipe> => {
    // Fetch the recipe from file:
    const source = fs.readFileSync(
        path.join(root, 'data', 'recipies', `${slug}.json`),
        'utf8'
    );
    const recipe: RecipeFromFile = JSON.parse(source);

    // Translate it:
    const translated = translateRecipe(recipe, locale);

    // Return it:
    return {
        ...translated,
        slug,
    };
};

export const getAllRecipies = async (locale: string) =>
    fs
        // Fetch all recipies from file:
        .readdirSync(path.join(root, 'data', 'recipies'))
        // For each file, parse the content of te file
        // and translate accordering to specified locale:
        .reduce<Recipe[]>((allRecipies, recipeSlug) => {
            const source = fs.readFileSync(
                path.join(root, 'data', 'recipies', recipeSlug),
                'utf8'
            );
            const recipe: RecipeFromFile = JSON.parse(source);
            const translated = translateRecipe(recipe, locale);

            return [
                ...allRecipies,
                {
                    ...translated,
                    slug: recipeSlug.replace('.json', ''),
                },
            ];
        }, [])
        // Finally, sort the returned array by recipe name:
        .sort((a, b) => a.name.localeCompare(b.name, locale));

const translateRecipe = (
    recipe: RecipeFromFile,
    locale: string
): TranslatedRecipeFromFile => ({
    ...recipe,
    description:
        recipe.description[locale] ??
        recipe.description['en'] ??
        recipe.description,
    tagline: recipe.tagline[locale] ?? recipe.tagline['en'] ?? recipe.tagline,
    steps: recipe.steps.map(translateRecipeStep(locale)),
});

const translateRecipeStep =
    (locale: string) =>
    (step: RecipeStepFromFile): RecipeStep => ({
        ...step,
        description:
            step.description[locale] ??
            step.description['en'] ??
            step.description,
    });
