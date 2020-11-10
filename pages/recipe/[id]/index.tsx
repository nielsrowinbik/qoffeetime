import Link from "next/link";
import { useRouter } from "next/router";

import recipe from "../../../recipies/v60.json";

const RecipeSettings = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <main>
            <nav>
                <Link href="/">
                    <button>back</button>
                </Link>
            </nav>
            <article>
                <h1>{recipe.name}</h1>
                <div>
                    <input min={0} type="range" />
                </div>
                <p>{recipe.description}</p>
                <Link href={`/recipe/${id}/timer`}>
                    <button>Let's do it!</button>
                </Link>
            </article>
        </main>
    );
};

export default RecipeSettings;
