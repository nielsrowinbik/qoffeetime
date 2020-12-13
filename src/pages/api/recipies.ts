import { readdirSync, readFileSync } from "fs";
import type { NextApiHandler } from "next";
import path from "path";

const handler: NextApiHandler = (_, res) => {
    const dir = path.resolve("./public", "recipies");

    const filenames = readdirSync(dir);
    const recipies = filenames.reduce((res, name) => {
        const slug = name.replace(".json", "");
        const recipe = JSON.parse(readFileSync(path.join(dir, name), "utf-8"));

        return { ...res, [slug]: recipe };
    }, {});

    res.status(200).json(recipies);
};

export default handler;
