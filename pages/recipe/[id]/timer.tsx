import Link from "next/link";
import { useRouter } from "next/router";

import { Main } from "../../../components/Main";
import { StepsList } from "../../../components/StepsList";
import { TotalTime } from "../../../components/TotalTime";

import { useTimer } from "../../../hooks/use-timer";
import { parseMillisecondsIntoTimeStamp } from "../../../utils/parser";

import recipe from "../../../recipies/v60.json";

const RecipeTimer = () => {
    const router = useRouter();
    const { id } = router.query;

    const timer = useTimer(recipe.steps);

    const onStopClick = () => {
        if (confirm("Do you want to cancel the timer?")) {
            timer.stop();
            router.push(`/recipe/${id}`);
        }
    };

    return (
        <Main>
            <nav>
                <Link href={`/recipe/${id}`}>
                    <button>back</button>
                </Link>
            </nav>
            <article>
                <TotalTime>{timer.remaining}</TotalTime>
                <h1>
                    <time>
                        {parseMillisecondsIntoTimeStamp(
                            timer.currentStepRemaining
                        )}
                    </time>
                </h1>
                <h2>{recipe.steps[timer.currentStepIndex].description}</h2>
                <StepsList
                    steps={recipe.steps}
                    currentStepIndex={timer.currentStepIndex}
                />
                {timer.elapsed === 0 && (
                    <button onClick={timer.start}>Start</button>
                )}
                {timer.elapsed > 0 && (
                    <button onClick={timer.toggle}>
                        {timer.isRunning ? "Pause" : "Continue"}
                    </button>
                )}
                {timer.elapsed > 0 && (
                    <button onClick={onStopClick}>Stop</button>
                )}
            </article>
            <style jsx>{`
                article {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    padding: 0 12px 12px 12px;
                }

                .total {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }

                .total time {
                    font-family: Roboto;
                    font-size: 1.8rem;
                    font-weight: 600;
                }

                h1 {
                    font-size: 5rem;
                    margin: 0;
                }
            `}</style>
        </Main>
    );
};

export default RecipeTimer;
