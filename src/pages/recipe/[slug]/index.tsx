import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";

import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { FixedFooter } from "../../../components/FixedFooter";
import { Main } from "../../../components/Layout";
import { Nav } from "../../../components/Nav";
import { RatioSlider } from "../../../components/RatioSlider";

import { useVolume } from "../../../hooks/use-volume";

import { getStaticRecipe, getStaticRecipePaths } from "../../../utils/recipies";
import type { RecipeProps } from "../../../utils/types";

const RecipeSettings: FC<RecipeProps> = ({ recipe }) => {
    const router = useRouter();
    const { slug } = router.query;

    // Get the volume from the URL:
    const { isValid, volume } = useVolume(recipe, `/recipe/${slug}`);

    // Update the URL with a new desired coffee volume:
    const onChange = useCallback(
        (newValue) => {
            router.replace(
                {
                    pathname: `/recipe/${slug}`,
                    query: {
                        volume: newValue,
                    },
                },
                undefined,
                { shallow: true }
            );
        },
        [slug]
    );

    // Don't render anything when the volume is invalid, as it will
    // result in malformed SVG's:
    if (!isValid) return null;

    return (
        <>
            <Nav>
                <BackButton />
            </Nav>
            <Main>
                <section>
                    <h2 style={{ marginTop: 0 }}>{recipe.name}</h2>
                    <RatioSlider
                        recipe={recipe}
                        value={volume}
                        onChange={onChange}
                    />
                </section>
                <section>
                    <p>
                        <strong>About this recipe:</strong>
                    </p>
                    <p>{recipe.description}</p>
                </section>
            </Main>
            <FixedFooter>
                <Link
                    href={{
                        pathname: `/recipe/${slug}/timer`,
                        query: {
                            volume,
                        },
                    }}
                >
                    <Button variant="large">Let's do it!</Button>
                </Link>
            </FixedFooter>
        </>
    );
};

export {
    getStaticRecipe as getStaticProps,
    getStaticRecipePaths as getStaticPaths,
};

export default RecipeSettings;
