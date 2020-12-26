import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";
import SwipeableViews from "react-swipeable-views";

import { FixedFooter } from "../components/FixedFooter";
import { Button, IconButton } from "../components/Button";
import { RecipeSlide } from "../components/RecipeSlide";
import { TimelineButton } from "../components/TimelineButton";

import { getStaticRecipies } from "../utils/recipies";

const IndexView = ({ recipies }) => {
    const slugs = Object.keys(recipies);

    const [slug, setSlug] = useState(slugs[0]);
    const recipe = recipies[slug];

    const onChangeIndex = useCallback(
        (newIndex: number) => setSlug(slugs[newIndex]),
        []
    );

    return (
        <>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-chrome-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#ff1744" />
                <meta
                    name="msapplication-TileImage"
                    content="/mstile-144x144.png"
                />
                <meta name="theme-color" content="#ff1744" />
            </Head>
            <SwipeableViews
                containerStyle={{ height: "100%" }}
                enableMouseEvents
                onChangeIndex={onChangeIndex}
                style={{ height: "100%", gridArea: "nav / nav / main / main" }}
            >
                {slugs.map((slug) => {
                    const recipe = recipies[slug];
                    return (
                        <RecipeSlide recipe={recipe} key={slug} slug={slug} />
                    );
                })}
            </SwipeableViews>
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
