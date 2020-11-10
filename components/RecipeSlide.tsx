import Link from "next/link";
import { FC } from "react";

import { LinkButton } from "./LinkButton";

import { Recipe } from "../utils/types";

type RecipeSlideProps = {
    recipe: Recipe;
    slug: string;
};

export const RecipeSlide: FC<RecipeSlideProps> = ({ recipe, slug }) => (
    <Link href={`/recipe/${slug}`}>
        <article>
            <div className="image" />
            <div className="content">
                <h1>{recipe.name}</h1>
                <p>{recipe.tagline}</p>
                <LinkButton href={`/recipe/${slug}`}>
                    Prepare {recipe.name}!
                </LinkButton>
            </div>
            <style jsx>{`
                article,
                .content,
                .image {
                    height: 100%;
                }

                article {
                    position: relative;
                }

                .image {
                    background-image: url("https://images.pexels.com/photos/922217/pexels-photo-922217.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-color: #ea0010;
                    background-blend-mode: multiply;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: -1;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 12px;
                }

                h1,
                p {
                    max-width: 75%;
                    overflow: hidden;
                    line-height: 1.25em;
                }

                h1 {
                    font-size: 5rem;
                    font-weight: 600;
                    margin: 1rem 0;
                }

                p {
                    font-size: 1.2rem;
                    font-weight: 500;
                    height: calc(8 * 1.25em);
                    margin: 0;
                }
            `}</style>
        </article>
    </Link>
);
