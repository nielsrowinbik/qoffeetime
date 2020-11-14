import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

import { LinkButton } from "./LinkButton";

import { Recipe } from "../utils/types";

const RecipeSlideArticle = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`;

const RecipeSlideHeader = styled.header`
    background-blend-mode: darken;
    background-color: #ff0841;
    background-image: url("https://images.pexels.com/photos/922217/pexels-photo-922217.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex: 100%;
    flex-direction: column;
    justify-content: flex-end;
    margin: 24px;
    padding: 12px;

    h1,
    p {
        max-width: 75%;
        overflow: hidden;
        line-height: 1.25em;
    }

    h1 {
        margin: 1rem 0;
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
        height: calc(8 * 1.25em);
        margin: 0;
    }
`;

type RecipeSlideProps = {
    recipe: Recipe;
    slug: string;
};

export const RecipeSlide: FC<RecipeSlideProps> = ({ recipe, slug }) => (
    <Link href={`/recipe/${slug}`}>
        <RecipeSlideArticle>
            <RecipeSlideHeader>
                <h1>{recipe.name}</h1>
                <p>{recipe.tagline}</p>
            </RecipeSlideHeader>
            <LinkButton href={`/recipe/${slug}`}>
                Prepare {recipe.name}!
            </LinkButton>
        </RecipeSlideArticle>
    </Link>
);
