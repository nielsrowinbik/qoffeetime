import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Button } from "../../../components/Button";
import { ButtonGroup } from "../../../components/ButtonGroup";
import { Nav } from "../../../components/Nav";
import { RecipeStepsList } from "../../../components/RecipeStepsList";
import { Timestamp } from "../../../components/Timestamp";

import { useTimer } from "../../../hooks/use-timer";

import recipe from "../../../recipies/v60.json";

const RecipeTimerMain = styled.main`
    display: grid;
    overflow: auto;
`;

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
        <>
            <Nav>
                <Link href={`/recipe/${id}`}>
                    <button>back</button>
                </Link>
            </Nav>
            <RecipeTimerMain>
                <p>
                    <Timestamp>{timer.remaining}</Timestamp> total left
                </p>
                <p>
                    <Timestamp>{timer.currentStepRemaining}</Timestamp>
                </p>
                <p>{recipe.steps[timer.currentStepIndex].description}</p>
                <RecipeStepsList
                    steps={recipe.steps}
                    currentStepIndex={timer.currentStepIndex}
                />
            </RecipeTimerMain>
            <ButtonGroup style={{ gridArea: "footer" }}>
                {timer.elapsed === 0 && (
                    <Button onClick={timer.start}>Start</Button>
                )}
                {timer.elapsed > 0 && (
                    <>
                        <Button onClick={timer.toggle}>
                            {timer.isRunning ? "Pause" : "Continue"}
                        </Button>
                        <Button dark onClick={onStopClick}>
                            Stop
                        </Button>
                    </>
                )}
            </ButtonGroup>
        </>
    );
};

export default RecipeTimer;
