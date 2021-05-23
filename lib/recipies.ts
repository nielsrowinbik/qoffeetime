import fs from 'fs';
import path from 'path';

const root = process.cwd();

export const getRecipeFiles = async () =>
    fs.readdirSync(path.join(root, 'data', 'recipies'));

export const getRecipeBySlug = async (slug: string) => {
    const source = slug
        ? fs.readFileSync(
              path.join(root, 'data', 'recipies', `${slug}.json`),
              'utf8'
          )
        : fs.readFileSync(path.join(root, 'data', `recipies.json`), 'utf8');

    const recipe = JSON.parse(source);

    return {
        ...recipe,
        slug,
    };
};

export const getAllRecipies = async () => {
    const files = fs.readdirSync(path.join(root, 'data', 'recipies'));

    return files.reduce((allRecipies, recipeSlug) => {
        const source = fs.readFileSync(
            path.join(root, 'data', 'recipies', recipeSlug),
            'utf8'
        );
        const recipe = JSON.parse(source);

        return [
            {
                ...recipe,
                slug: recipeSlug.replace('.json', ''),
            },
            ...allRecipies,
        ];
    }, []);
};
