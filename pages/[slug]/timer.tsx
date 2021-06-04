import classNames from 'classnames';
import template from 'lodash.template';
import { mdiClose, mdiPlayOutline, mdiPause, mdiStop } from '@mdi/js';
import { useRouter } from 'next/router';
import { FC } from 'react';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { formatTime, queryArgToNumber, round } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import { useTimer, useWakeLock } from '../../lib/timer';
import type { Recipe, RecipeStep } from '../../lib/types';

import Button from '../../components/Button';
import GoBack from '../../components/GoBack';
import IconButton from '../../components/IconButton';
import StopWatch from '../../components/StopWatch';

// Sum all step durations up and including the provided index:
const sumIncludingIndex = (steps: RecipeStep[], index: number) =>
    steps
        .slice(0, Math.min(index + 1, steps.length))
        .reduce((total: number, { duration }) => total + duration, 0) * 1000;

const getCurrentStep = (
    steps: RecipeStep[],
    elapsed: number,
    isComplete: boolean
) => {
    // If the timer is complete, return the last step as being the current and
    // return a remaining time within that step of 0:
    if (isComplete)
        return {
            index: steps.length - 1,
            remaining: 0,
        };

    // Find the index of the current step:
    const foundIndex = steps.findIndex(
        (_, i: number, steps) => elapsed < sumIncludingIndex(steps, i)
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
    const remaining =
        indexOffset > 0 ? steps[index].duration * 1000 : foundRemaining;

    // Return the index and the remaining seconds:
    return {
        index,
        remaining: round(remaining / 1000),
    };
};

const TimePage: FC<Recipe> = ({ name, ...recipe }) => {
    const confirmMessage = 'Do you want to cancel the timer?';

    const router = useRouter();
    const { coffee: coffeeParam, volume: volumeParam } = router.query;
    const coffee = queryArgToNumber(coffeeParam);
    const volume = queryArgToNumber(volumeParam);

    const steps = recipe.steps.map((step) => ({
        ...step,
        description: template(step.description)({ coffee, volume }),
    }));
    const target = round(sumIncludingIndex(steps, steps.length) / 1000);

    const { elapsed, isComplete, isRunning, remaining, reset, toggle } =
        useTimer({
            target,
        });
    const remainingInSeconds = round(remaining / 1000);
    const currentStep = getCurrentStep(steps, elapsed, isComplete);

    // Keep the screen on while this page is rendered:
    useWakeLock();

    return (
        <>
            <NavLayout>
                <GoBack confirm={isRunning && confirmMessage}>
                    <IconButton icon={mdiClose} small />
                </GoBack>
            </NavLayout>
            <MainLayout>
                <header className="text-center">
                    <time className="text-3xl font-bold">
                        {formatTime(remainingInSeconds)}
                    </time>
                    <span className="block">total left</span>
                </header>
                <section className="mx-4 my-6">
                    <time className="text-7xl font-bold">
                        {formatTime(currentStep.remaining)}
                    </time>
                    <p className="text-2xl font-semibold mt-2">
                        {steps[currentStep.index].description}
                    </p>
                </section>
                <section className="overflow-auto mt-4">
                    <ol>
                        {steps.map(({ description, duration }, stepIndex) => {
                            const isCurrentStep =
                                currentStep.index === stepIndex;
                            const className = classNames(
                                'text-lg leading-5 text-white text-base',
                                {
                                    'text-opacity-60': !isCurrentStep,
                                    'text-opacity-100': isCurrentStep,
                                    'font-semibold': isCurrentStep,
                                }
                            );

                            return (
                                <li
                                    className="flex flex-row items-center mb-3"
                                    key={stepIndex}
                                >
                                    <span className="text-black text-opacity-30 font-bold flex-none mr-4">
                                        {stepIndex + 1}
                                    </span>
                                    <StopWatch className="mr-4">
                                        {formatTime(duration, false)}
                                    </StopWatch>
                                    <p className={className}>{description}</p>
                                </li>
                            );
                        })}
                    </ol>
                </section>
            </MainLayout>
            <FooterLayout>
                {!isRunning && (
                    <Button icon={mdiPlayOutline} onClick={() => toggle()}>
                        Start
                    </Button>
                )}
                {isRunning && (
                    <Button icon={mdiPause} onClick={() => toggle()}>
                        Pause
                    </Button>
                )}
                {(isRunning || elapsed > 0) && (
                    <GoBack confirm={confirmMessage}>
                        <Button icon={mdiStop} variant="dark">
                        Stop
                    </Button>
                    </GoBack>
                )}
            </FooterLayout>
        </>
    );
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

export default TimePage;
export { getStaticPaths, getStaticProps };
