import fs from 'fs';
import path from 'path';

import type { Recipe, RecipeFromFile } from '../lib/types';

const root = process.cwd();

export const getRecipeFiles = async () =>
    fs.readdirSync(path.join(root, 'data', 'recipies'));

export const getRecipeBySlug = async (slug: string): Promise<Recipe> => {
    const source = slug
        ? fs.readFileSync(
              path.join(root, 'data', 'recipies', `${slug}.json`),
              'utf8'
          )
        : fs.readFileSync(path.join(root, 'data', `recipies.json`), 'utf8');

    const recipe: RecipeFromFile = JSON.parse(source);

    return {
        ...recipe,
        slug,
    };
};

export const getAllRecipies = async () => {
    const files = fs.readdirSync(path.join(root, 'data', 'recipies'));

    return files.reduce<Recipe[]>((allRecipies, recipeSlug) => {
        const source = fs.readFileSync(
            path.join(root, 'data', 'recipies', recipeSlug),
            'utf8'
        );
        const recipe = JSON.parse(source);

        return [
            ...allRecipies,
            {
                ...recipe,
                slug: recipeSlug.replace('.json', ''),
            },
        ].sort((a, b) => a.name.localeCompare(b.name));
    }, []);
};
