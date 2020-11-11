import Link from "next/link";
import { useRouter } from "next/router";

import { LinkButton } from "../../../components/LinkButton";
import { Main } from "../../../components/Main";
import { Nav } from "../../../components/Nav";

import recipe from "../../../recipies/v60.json";

const RecipeSettings = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Main>
            <Nav>
                <Link href="/">
                    <button>back</button>
                </Link>
            </Nav>
            <article>
                <h1>{recipe.name}</h1>
                <div className="slider">
                    <input min={0} type="range" />
                </div>
                <p>{recipe.description}</p>
                <LinkButton href={`/recipe/${id}/timer`}>
                    Let's do it!
                </LinkButton>
                <style jsx>{`
                    article {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }

                    h1 {
                        font-size: 3rem;
                    }

                    p {
                        font-size: 1.1rem;
                        font-weight: 500;
                    }

                    .slider {
                        flex: 100%;
                    }
                `}</style>
            </article>
        </Main>
    );
};

export default RecipeSettings;
