import { useRouter } from "next/router";
import { useCallback } from "react";
import styled from "styled-components";

import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { ButtonGroup } from "../../../components/ButtonGroup";
import { Nav } from "../../../components/Nav";
import { RecipeStepsList } from "../../../components/RecipeStepsList";
import { Timestamp } from "../../../components/Timestamp";

import { useTimer } from "../../../hooks/use-timer";

import recipies from "../../../recipies";

const RecipeTimerMain = styled.main`
    display: grid;
    overflow: auto;
    margin: 0 16px;
`;

const RecipeTimer = () => {
    const router = useRouter();
    const { slug } = router.query;
    const recipe = recipies[slug as string];

    const timer = useTimer(recipe.steps);

    const onStopClick = useCallback(() => {
        if (confirm("Do you want to cancel the timer?")) {
            timer.stop();
            router.back();
        }
    }, []);

    return (
        <>
            <Nav>
                <BackButton />
            </Nav>
            <RecipeTimerMain>
                <h3 style={{ margin: 0 }}>
                    <Timestamp>{timer.remaining}</Timestamp>
                </h3>
                <p style={{ margin: 0 }}>total left</p>
                <h1 style={{ margin: 0 }}>
                    <Timestamp>{timer.currentStepRemaining}</Timestamp>
                </h1>
                <h4>{recipe.steps[timer.currentStepIndex].description}</h4>
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
