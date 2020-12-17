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

import { useRenderedRecipe } from "../../../hooks/use-rendered-recipe";
import { useTimer } from "../../../hooks/use-timer";
import { useWakeLock } from "../../../hooks/use-wakelock";

import { minmax } from "../../../utils/helpers";
import { getStaticRecipe, getStaticRecipePaths } from "../../../utils/recipies";

const RecipeTimer = ({ recipe }) => {
    const router = useRouter();
    const { slug, volume: volumeStr } = router.query;

    // Parse volume from the URL and check correctness:
    const volume = parseInt(volumeStr as string);
    const isValidVolume =
        !Number.isNaN(volume) &&
        volume <= recipe.maxWater &&
        volume >= recipe.minWater;

    // Correct the volume in the URL if it's outside the volume range set by the recipe:
    useEffect(() => {
        if (isValidVolume) return;

        const actual = volume;
        const corrected = Number.isNaN(actual)
            ? recipe.defaultVolume
            : minmax(actual, recipe.minWater, recipe.maxWater);

        router.replace(
            {
                pathname: `/recipe/${slug}/timer`,
                query: {
                    volume: corrected,
                },
            },
            undefined,
            { shallow: true }
        );
    }, [isValidVolume]);

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

    // Redirect to the coffee log when the timer completes:
    useEffect(() => {
        const isComplete = rendered && timer.isComplete;

        if (isComplete) {
            router.replace(`/timeline`);
        }
    }, [timer.isComplete]);

    // Don't render anything as long as the volume is not corrected:
    if (!isValidVolume) return null;

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
