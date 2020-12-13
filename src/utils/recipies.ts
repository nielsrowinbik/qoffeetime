import { readdirSync, readFileSync } from "fs";
import path from "path";

const recipeDirName = "recipies";

export const getStaticRecipe = ({ params }) => {
    const dir = path.join(process.cwd(), recipeDirName);
    const filename = path.join(dir, `${params.slug}.json`);

    const recipe = JSON.parse(readFileSync(filename, "utf-8"));

    return { props: { recipe } };
};

const getRecipiesFromFolder = () => {
    const dir = path.join(process.cwd(), recipeDirName);
    const filenames = readdirSync(dir);

    const recipies = filenames.reduce((res, name) => {
        const slug = name.replace(".json", "");
        const recipe = JSON.parse(readFileSync(path.join(dir, name), "utf-8"));

        return { ...res, [slug]: recipe };
    }, {});

    return recipies;
};

export const getStaticRecipePaths = () => {
    const recipies = getRecipiesFromFolder();
    const paths = Object.keys(recipies).map((slug) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticRecipies = () => {
    const recipies = getRecipiesFromFolder();

    return {
        props: {
            recipies,
        },
    };
};
