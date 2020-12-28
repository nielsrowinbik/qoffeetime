import Link from "next/link";
import { useCallback, useState } from "react";

import { FixedFooter } from "../components/FixedFooter";
import { Button } from "../components/Button";
import { RecipeSlides } from "../components/RecipeSlide";
import { TimelineButton } from "../components/TimelineButton";

import { getStaticRecipies } from "../utils/recipies";

const IndexView = ({ recipies }) => {
    const slugs = Object.keys(recipies);
    const [slug, setSlug] = useState(slugs[0]);
    const recipe = recipies[slug];

    const onChange = useCallback((newSlug: string) => setSlug(newSlug), []);

    return (
        <>
            <RecipeSlides
                onChange={onChange}
                recipies={recipies}
                value={slug}
            />
            <TimelineButton />
            <FixedFooter>
                <Link
                    href={{
                        pathname: `/recipe/${slug}`,
                        query: { volume: recipe.minWater },
                    }}
                >
                    <Button variant="large">Prepare {recipe.name}!</Button>
                </Link>
            </FixedFooter>
        </>
    );
};

export { getStaticRecipies as getStaticProps };

export default IndexView;
