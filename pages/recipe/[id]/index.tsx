import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import { LinkButton } from "../../../components/LinkButton";
import { Nav } from "../../../components/Nav";
import { RatioSlider } from "../../../components/RatioSlider";

import recipe from "../../../recipies/v60.json";

const RecipeSettings = () => {
    const router = useRouter();
    const { id } = router.query;

    const [desiredVolume, setDesiredVolume] = useState(360);
    const onChange = useCallback((newValue) => setDesiredVolume(newValue), []);

    return (
        <>
            <Nav>
                <Link href="/">
                    <button>back</button>
                </Link>
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
