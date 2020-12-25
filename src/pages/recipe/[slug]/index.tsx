import { useRouter } from "next/router";
import { useCallback } from "react";

import { BackButton } from "../../../components/BackButton";
import { FixedFooter } from "../../../components/FixedFooter";
import { LinkButton } from "../../../components/LinkButton";
import { Main } from "../../../components/Layout";
import { Nav } from "../../../components/Nav";
import { RatioSlider } from "../../../components/RatioSlider";

import { useVolume } from "../../../hooks/use-volume";

import { getStaticRecipe, getStaticRecipePaths } from "../../../utils/recipies";

const RecipeSettings = ({ recipe }) => {
    const router = useRouter();
    const { slug } = router.query;

    // Get the volume from the URL:
    const { volume } = useVolume(recipe, `/recipe/${slug}`);

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
                <LinkButton
                    href={{
                        pathname: `/recipe/${slug}/timer`,
                        query: {
                            volume,
                        },
                    }}
                >
                    Let's do it!
                </LinkButton>
            </FixedFooter>
        </>
    );
};

export {
    getStaticRecipe as getStaticProps,
    getStaticRecipePaths as getStaticPaths,
};

export default RecipeSettings;
