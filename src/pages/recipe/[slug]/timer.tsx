import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { ButtonGroup } from "../../../components/ButtonGroup";
import { CurrentTimeLeft } from "../../../components/CurrentTimeLeft";
import { FixedFooter } from "../../../components/FixedFooter";
import { Main, Section } from "../../../components/Layout";
import { Nav, NavHeading } from "../../../components/Nav";
import { RecipeStepsList } from "../../../components/RecipeStepsList";
import { Timestamp } from "../../../components/Timestamp";
import { TotalTimeLeft } from "../../../components/TotalTimeLeft";

import { useTimer } from "../../../hooks/use-timer";
import { useWakeLock } from "../../../hooks/use-wakelock";

import recipies from "../../../recipies";

const RecipeTimer = () => {
    const router = useRouter();
    const { slug } = router.query;

    const recipe = useMemo(() => recipies[slug as string], [slug]);
    const timer = useTimer(recipe);

    const onStopClick = useCallback(() => {
        if (confirm("Do you want to cancel the timer?")) {
            timer.stop();
            router.back();
        }
    }, []);

    // useWakeLock(true);

    if (!recipe) return null;

    return (
        <>
            <Nav>
                <BackButton />
                <NavHeading>{recipe.name}</NavHeading>
            </Nav>
            <Main>
                <Section>
                    <TotalTimeLeft>{timer.remaining}</TotalTimeLeft>
                </Section>
                <Section>
                    <CurrentTimeLeft
                        stepDescription={
                            recipe.steps[timer.currentStepIndex].description
                        }
                        timeRemaining={timer.currentStepRemaining}
                    />
                </Section>
                <Section scroll>
                    <RecipeStepsList
                        steps={recipe.steps}
                        currentStepIndex={timer.currentStepIndex}
                    />
                </Section>
            </Main>
            <FixedFooter>
                <ButtonGroup>
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
            </FixedFooter>
        </>
    );
};

export default RecipeTimer;
