import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "../../../components/Button";
import { Main } from "../../../components/Main";
import { Nav } from "../../../components/Nav";
import { StepsList } from "../../../components/StepsList";
import { TotalTime } from "../../../components/TotalTime";

import { useTimer } from "../../../hooks/use-timer";
import { parseMillisecondsIntoTimeStamp } from "../../../utils/parser";

import recipe from "../../../recipies/v60.json";
import { ButtonGroup } from "../../../components/ButtonGroup";

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
            <Nav>
                <Link href={`/recipe/${id}`}>
                    <button>back</button>
                </Link>
            </Nav>
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
                    <Button onClick={timer.start}>Start</Button>
                )}
                {timer.elapsed > 0 && (
                    <ButtonGroup>
                        <Button onClick={timer.toggle}>
                            {timer.isRunning ? "Pause" : "Continue"}
                        </Button>
                        <Button dark onClick={onStopClick}>
                            Stop
                        </Button>
                    </ButtonGroup>
                )}
            </article>
            <style jsx>{`
                article {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
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
