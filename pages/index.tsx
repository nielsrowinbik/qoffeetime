import SwipeableViews from "react-swipeable-views";
import Link from "next/link";

import V60Recipe from "../recipies/v60.json";

const IndexView = () => (
    <main>
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
