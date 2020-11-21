import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { BackButton } from "../../../components/BackButton";
import { LinkButton } from "../../../components/LinkButton";
import { Nav } from "../../../components/Nav";
import { RatioSlider } from "../../../components/RatioSlider";

import recipies from "../../../recipies";

const RecipeSettings = () => {
    const router = useRouter();
    const { id } = router.query;
    const recipe = recipies[id as string];

    const [desiredVolume, setDesiredVolume] = useState(360);
    const onChange = useCallback((newValue) => setDesiredVolume(newValue), []);

    if (recipe === undefined) return null;

    return (
        <>
            <Nav>
                <BackButton />
            </Nav>
            <article style={{ gridArea: "main" }}>
                <h2 style={{ marginTop: 0 }}>{recipe.name}</h2>
                <RatioSlider
                    recipe={recipe}
                    value={desiredVolume}
                    onChange={onChange}
                />
                <p>
                    <strong>About this recipe:</strong>
                </p>
                <p>{recipe.description}</p>
            </article>
            <LinkButton
                href={`/recipe/${id}/timer?volume=${desiredVolume}`}
                // @ts-ignore
                style={{ gridArea: "footer" }}
            >
                Let's do it!
            </LinkButton>
        </>
    );
};

export default RecipeSettings;
