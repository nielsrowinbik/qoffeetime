import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

import { BackButton } from "../../../components/BackButton";
import { FixedFooter } from "../../../components/FixedFooter";
import { LinkButton } from "../../../components/LinkButton";
import { Main } from "../../../components/Layout";
import { Nav } from "../../../components/Nav";
import { RatioSlider } from "../../../components/RatioSlider";

import { minmax } from "../../../utils/helpers";
import { getStaticRecipe, getStaticRecipePaths } from "../../../utils/recipies";

const RecipeSettings = ({ recipe }) => {
    const router = useRouter();
    const { slug, volume: volumeStr } = router.query;

    // Parse volume from the URL and check correctness:
    const volume = parseInt(volumeStr as string);
    const isValidVolume =
        !Number.isNaN(volume) &&
        volume <= recipe.maxWater &&
        volume >= recipe.minWater;

    // Correct the volume in the URL if it's outside the volume range set by the recipe:
    useEffect(() => {
        if (isValidVolume) return;

        const actual = volume;
        const corrected = Number.isNaN(actual)
            ? recipe.defaultVolume
            : minmax(actual, recipe.minWater, recipe.maxWater);

        router.replace({
            pathname: `/recipe/${slug}`,
            query: {
                volume: corrected,
            },
        });
    }, [isValidVolume]);

    // Update the URL with a new desired coffee volume:
    const onChange = useCallback(
        (newValue) => {
            router.replace({
                pathname: `/recipe/${slug}`,
                query: {
                    volume: newValue,
                },
            });
        },
        [slug]
    );

    // Don't render anything as long as the volume is not corrected:
    if (!isValidVolume) return null;

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
