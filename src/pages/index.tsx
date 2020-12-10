import Head from "next/head";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import slugify from "slugify";

import { FixedFooter } from "../components/FixedFooter";
import { LinkButton } from "../components/LinkButton";
import { RecipeSlide } from "../components/RecipeSlide";

import recipies from "../recipies";

const recipeList = Object.values(recipies);

const IndexView = () => {
    const [index, setIndex] = useState(0);

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
                <meta name="msapplication-TileColor" content="#b91d47" />
                <meta
                    name="msapplication-TileImage"
                    content="/mstile-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <SwipeableViews
                containerStyle={{ height: "100%" }}
                enableMouseEvents
                onChangeIndex={(index: number) => setIndex(index)}
                style={{ height: "100%", gridArea: "main" }}
            >
                {Object.keys(recipies).map((slug) => {
                    const recipe = recipies[slug];
                    return (
                        <RecipeSlide recipe={recipe} key={slug} slug={slug} />
                    );
                })}
            </SwipeableViews>
            <FixedFooter>
                <LinkButton
                    href={`/recipe/${slugify(recipeList[index].name, {
                        lower: true,
                    })}`}
                >
                    Prepare {recipeList[index].name}!
                </LinkButton>
            </FixedFooter>
        </>
    );
};

export default IndexView;