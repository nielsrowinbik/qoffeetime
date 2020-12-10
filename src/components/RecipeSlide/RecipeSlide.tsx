import { FC } from "react";
import Link from "next/link";

import { LinkButton } from "../LinkButton";

import { Recipe } from "../../utils/types";

import { RecipeSlideContainer as Container } from "./RecipeSlideContainer";
import { RecipeSlideHeader as Header } from "./RecipeSlideHeader";

type RecipeSlideProps = {
    recipe: Recipe;
    slug: string;
};

export const RecipeSlide: FC<RecipeSlideProps> = ({ recipe, slug }) => (
    <Link href={`/recipe/${slug}`}>
        <Container>
            <Header
                description={recipe.tagline}
                image={recipe.image}
                title={recipe.name}
            />
        </Container>
    </Link>
);
