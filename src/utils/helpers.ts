import { readdirSync, readFileSync } from "fs";
import path from "path";

const recipeDir = path.join(process.cwd(), "recipies");

export const getStaticRecipe = ({ params }) => {
    const name = `${params.slug}.json`;
    const recipe = JSON.parse(
        readFileSync(path.join(recipeDir, name), "utf-8")
    );

    return { props: { recipe } };
};

const getRecipiesFromFolder = (recipeDir: string) => {
    const filenames = readdirSync(recipeDir);
    const recipies = filenames.reduce((res, name) => {
        const slug = name.replace(".json", "");
        const recipe = JSON.parse(
            readFileSync(path.join(recipeDir, name), "utf-8")
        );

        return { ...res, [slug]: recipe };
    }, {});

    return recipies;
};

export const getStaticRecipePaths = () => {
    const recipies = getRecipiesFromFolder(recipeDir);
    const paths = Object.keys(recipies).map((slug) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticRecipies = () => {
    const recipies = getRecipiesFromFolder(recipeDir);

    return {
        props: {
            recipies,
        },
    };
};

export const sum = (arr: number[]) =>
    arr.reduce((total, item) => (total += item), 0);

export const valuesForKey = (arr: any[], key: string) =>
    arr.map((item) => item[key]);
