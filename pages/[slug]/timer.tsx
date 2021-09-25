import template from 'lodash.template';
import { mdiPlayOutline, mdiPause, mdiStop } from '@mdi/js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { FC } from 'react';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import {
    formatTime,
    queryArgToNumber,
    round,
    toMilliseconds,
    toSeconds,
} from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import { useTimer, useWakeLock } from '../../lib/timer';
import type { Recipe, RecipeStep, ParsedRecipeStep } from '../../lib/types';

import BackButton from '../../components/BackButton';
import Button, { ButtonGroup } from '../../components/Button';
import CurrentStepDetails from '../../components/CurrentStepDetails';
import GoBack from '../../components/GoBack';
import StepsList from '../../components/StepsList';
import TimerStat from '../../components/TimerStat';

const TimerPage: FC<Recipe> = ({ name, slug, ...recipe }) => {
    const confirmMessage = 'Do you want to cancel the timer?';

    const router = useRouter();
    const { output: outputParam, ratio: ratioParam } = router.query;
    const ratio = queryArgToNumber(ratioParam);
    const output = queryArgToNumber(outputParam);
    const coffee = round((ratio / 1000) * output);

    const steps = parseSteps(recipe.steps, { coffee, output });

    const target = toSeconds(sumIncludingIndex(steps, steps.length));
    const timer = useTimer(target, { interval: 10 });

    const [currentIndex, currentStep] = getCurrentStep(steps, timer.elapsed);
    const currentWeight = round(
        currentStep.start + currentStep.progress * currentStep.toAdd
    );

    // Keep the screen on while this page is rendered:
    useWakeLock();

    // Once the timer completes, show the success page:
    useEffect(() => {
        timer.isComplete &&
            router.replace({
                pathname: `/${slug}/success`,
                query: {
                    output,
                    ratio,
                },
            });
    }, [timer.isComplete]);

    // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <NavLayout>
                <BackButton confirm={timer.isRunning && confirmMessage} />
            </NavLayout>
            <MainLayout>
                <header className="grid grid-flow-col auto-cols-fr">
                    <TimerStat
                        as="time"
                        label="total left"
                        value={formatTime(timer.remaining)}
                    />
                    <TimerStat
                        label="current weight"
                        value={`${currentWeight} g`}
                    />
                </header>
                <section className="mx-4 my-6">
                    <CurrentStepDetails
                        description={currentStep.description}
                        remaining={currentStep.remaining}
                    />
                </section>
                <section className="overflow-auto mt-4">
                    <StepsList currentIndex={currentIndex} steps={steps} />
                </section>
            </MainLayout>
            <FooterLayout>
                <ButtonGroup>
                    {!timer.isRunning && (
                        <Button
                            icon={mdiPlayOutline}
                            onClick={() => timer.toggle()}
                        >
                            Start
                        </Button>
                    )}
                    {timer.isRunning && (
                        <Button icon={mdiPause} onClick={() => timer.toggle()}>
                            Pause
                        </Button>
                    )}
                    {(timer.isRunning || timer.elapsed > 0) && (
                        <GoBack confirm={confirmMessage}>
                            <Button icon={mdiStop} inGroup variant="dark">
                                Stop
                            </Button>
                        </GoBack>
                    )}
                </ButtonGroup>
            </FooterLayout>
        </>
    );
};

// Compute the current step:
const getCurrentStep = (
    steps: ParsedRecipeStep[],
    elapsed: number
): [number, ParsedRecipeStep & { remaining: number; progress: number }] => {
    // Find the index of the current step:
    const foundIndex = steps.findIndex(
        (_, i: number, steps) => elapsed <= sumIncludingIndex(steps, i)
    );

    // Compute remaining milliseconds in the current step:
    const foundRemaining = Math.max(
        sumIncludingIndex(steps, foundIndex) - elapsed,
        0
    );

    // If there's less than a second left in the current step and the current
    // step isn't the last, then we should mark the next step as being active:
    const indexOffset =
        foundRemaining < 500 && foundIndex !== steps.length - 1 ? 1 : 0;
    const index = Math.min(foundIndex + indexOffset, steps.length - 1);

    // If there's less than a second left in the current step, we correct the
    // index to mark the next step as being the current one. We then also need
    // to set the remaining seconds in the current step to be the entire duration
    // of that step, unless it is the last step.
    const duration = toMilliseconds(steps[index].duration);
    const remaining = indexOffset > 0 ? duration : foundRemaining;

    // Compute the current step's progress:
    const progress = (duration - remaining) / duration;

    // Return the index and the remaining seconds:
    return [
        index,
        {
            ...steps[index],
            remaining,
            progress,
        },
    ];
};

const getStaticPaths = async () => {
    const recipies = await getRecipeFiles();

    return {
        paths: recipies.map((p) => ({
            params: {
                slug: p.replace(/\.json/, ''),
            },
        })),
        fallback: false,
    };
};

const getStaticProps = async ({ params }) => {
    const recipe = await getRecipeBySlug(params.slug);

    return { props: { ...recipe } };
};

// Parse the recipe steps:
const templateSettings = { interpolate: /{{([\s\S]+?)}}/g };
const parseSteps = (
    steps: RecipeStep[],
    { coffee, output }: Record<string, any>
): ParsedRecipeStep[] =>
    steps.reduce((parsedSteps, step, index) => {
        // Template this step's target weight, if any:
        const parsedTarget = parseInt(
            template(
                step.target,
                templateSettings
            )({
                coffee,
                output,
            })
        );

        // Compute the actual target, if none was specified for this step.
        // If this is the first step, then the target is 0.
        // If this is any other
        const target =
            parsedTarget || parsedSteps[parsedSteps.length - 1]?.target || 0;

        // Compute the start weight for this step:
        const start = parsedSteps[parsedSteps.length - 1]?.target || 0;

        // Compute the target difference compared to the previous step,
        // so we can tell the user how much to pour in this step:
        const toAdd = target - start;

        // Template this step's description, allowing it to contain
        // this step's target:
        const description = template(
            step.description,
            templateSettings
        )({
            target,
        });

        // Return all previous steps, and add the currently parsed one:
        return [
            ...parsedSteps,
            {
                ...step,
                description,
                start,
                target,
                toAdd,
            },
        ];
    }, []);

// Sum all step durations up and including the provided index:
const sumIncludingIndex = (
    steps: RecipeStep[] | ParsedRecipeStep[],
    index: number
) =>
    steps
        .slice(0, Math.min(index + 1, steps.length))
        .reduce(
            (total: number, { duration }) => total + toMilliseconds(duration),
            0
        );

export default TimerPage;
export { getStaticPaths, getStaticProps };
