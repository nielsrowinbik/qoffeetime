import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { ButtonGroup } from "../../../components/ButtonGroup";
import { CurrentTimeLeft } from "../../../components/CurrentTimeLeft";
import { FixedFooter } from "../../../components/FixedFooter";
import { Main, Section } from "../../../components/Layout";
import { Nav, NavHeading } from "../../../components/Nav";
import { RecipeStepsList } from "../../../components/RecipeStepsList";
import { TotalTimeLeft } from "../../../components/TotalTimeLeft";

import { useBrews } from "../../../hooks/use-brews-context";
import { useRenderedRecipe } from "../../../hooks/use-rendered-recipe";
import { useTimer } from "../../../hooks/use-timer";
import { useVolume } from "../../../hooks/use-volume";
import { useWakeLock } from "../../../hooks/use-wakelock";

import { getStaticRecipe, getStaticRecipePaths } from "../../../utils/recipies";

const RecipeTimer = ({ recipe }) => {
    const router = useRouter();
    const { slug } = router.query;

    // Get the volume from the URL:
    const { volume } = useVolume(recipe, `/recipe/${slug}/timer`);

    // Render the recipe steps and set up a timer:
    const rendered = useRenderedRecipe(recipe, volume);
    const timer = useTimer(rendered);

    // Keep the screen on as long as this page is visible:
    useWakeLock(true);

    // Handle the user clicking "stop":
    const onStopClick = useCallback(() => {
        if (confirm("Do you want to cancel the timer?")) {
            timer.stop();
            router.back();
        }
    }, []);

    // Save the brew and redirect when the timer completes:
    const { createBrew } = useBrews();
    useEffect(() => {
        const isComplete = rendered && timer.isComplete;

        if (isComplete) {
            const brew = {
                coffee: Math.round((recipe.ratio / 1000) * volume),
                recipe: slug as string,
                volume,
            };

            createBrew(brew).then(() => router.replace(`/timeline`));
        }
    }, [timer.isComplete]);

    return (
        <>
            <Nav>
                <BackButton />
                <NavHeading>{rendered.name}</NavHeading>
            </Nav>
            <Main>
                <Section>
                    <TotalTimeLeft>{timer.remaining}</TotalTimeLeft>
                </Section>
                <Section>
                    <CurrentTimeLeft
                        stepDescription={
                            rendered.steps[timer.currentStepIndex].description
                        }
                        timeRemaining={timer.currentStepRemaining}
                    />
                </Section>
                <Section scroll>
                    <RecipeStepsList
                        steps={rendered.steps}
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

export {
    getStaticRecipe as getStaticProps,
    getStaticRecipePaths as getStaticPaths,
};

export default RecipeTimer;
