import SwipeableViews from "react-swipeable-views";
import Head from "next/head";
import Link from "next/link";

import V60Recipe from "../recipies/v60.json";

const IndexView = () => (
    <main>
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
        <SwipeableViews enableMouseEvents>
            <article>
                <h1>{V60Recipe.name}</h1>
                <h2>{V60Recipe.tagline}</h2>
                <Link href="/recipe/v60">
                    <button>Prepare {V60Recipe.name}!</button>
                </Link>
            </article>
            <article>
                <h1>French Press</h1>
                <h2>
                    The French Press produces the heaviest-bodied coffee of any
                    brewer.
                </h2>
            </article>
            <article>
                <h1>Moka</h1>
                <h2>
                    Italians love them, as they're the closest thing to an
                    espresso coffee you can make at home without investing in an
                    expensive home-espresso machine.
                </h2>
            </article>
        </SwipeableViews>
    </main>
);

export default IndexView;
