import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { BackButton } from "../../../components/BackButton";
import { FixedFooter } from "../../../components/FixedFooter";
import { LinkButton } from "../../../components/LinkButton";
import { Main } from "../../../components/Layout";
import { Nav } from "../../../components/Nav";
import { RatioSlider } from "../../../components/RatioSlider";

import { getStaticRecipe, getStaticRecipePaths } from "../../../utils/recipies";

const RecipeSettings = ({ recipe }) => {
    const router = useRouter();
    const { slug } = router.query;

    // Keep track of the desired coffee volume, default to 400ml:
    const [desiredVolume, setDesiredVolume] = useState(400);

    // Set up a callback to change the desired coffee volume:
    const onChange = useCallback((newValue) => setDesiredVolume(newValue), []);

    // Update the desired coffee volume to the recipe's default when the recipe changes:
    useEffect(() => recipe && setDesiredVolume(recipe.defaultVolume), [recipe]);

    if (!recipe) return null;

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
                        value={desiredVolume}
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
                    href={`/recipe/${slug}/timer?volume=${desiredVolume}`}
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
