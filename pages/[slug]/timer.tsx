import classNames from 'classnames';
import template from 'lodash.template';
import { mdiPlayOutline, mdiPause, mdiStop } from '@mdi/js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { formatTime, queryArgToNumber, round } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import { useTimer, useWakeLock } from '../../lib/timer';
import type { Recipe, RecipeStep, ParsedRecipeStep } from '../../lib/types';

import BackButton from '../../components/BackButton';
import Button, { ButtonGroup } from '../../components/Button';
import GoBack from '../../components/GoBack';
import StopWatch from '../../components/StopWatch';

// Sum all step durations up and including the provided index:
const sumIncludingIndex = (
    steps: RecipeStep[] | ParsedRecipeStep[],
    index: number
) =>
    steps
        .slice(0, Math.min(index + 1, steps.length))
        .reduce((total: number, { duration }) => total + duration, 0) * 1000;

// Parse the recipe steps:
const templateSettings = { interpolate: /{{([\s\S]+?)}}/g };
const parseSteps = (
    steps: RecipeStep[],
    { coffee, volume }: Record<string, any>
): ParsedRecipeStep[] =>
    steps.reduce((parsedSteps, step, index) => {
        // Template this step's target weight, if any:
        const parsedTarget = parseInt(
            template(
                step.target,
                templateSettings
            )({
                coffee,
                volume,
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

// Compute the current step:
const getCurrentStep = (
    steps: RecipeStep[] | ParsedRecipeStep[],
    elapsed: number,
    isComplete: boolean
) => {
    // If the timer is complete, return the last step as being the current and
    // return a remaining time within that step of 0:
    if (isComplete)
        return {
            duration: steps[steps.length - 1].duration,
            index: steps.length - 1,
            progress: 0,
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

    // Store the current step's duration:
    const duration = steps[index].duration;

    // Compute the current step's progress:
    const progress = (duration * 1000 - remaining) / (duration * 1000);

    // Return the index and the remaining seconds:
    return {
        duration,
        index,
        progress,
        remaining: round(remaining / 1000),
    };
};

const TimerPage: FC<Recipe> = ({ name, slug, ...recipe }) => {
    const confirmMessage = 'Do you want to cancel the timer?';

    const router = useRouter();
    const { coffee: coffeeParam, volume: volumeParam } = router.query;
    const coffee = queryArgToNumber(coffeeParam);
    const volume = queryArgToNumber(volumeParam);

    const steps = parseSteps(recipe.steps, { coffee, volume });

    const { elapsed, isComplete, isRunning, remaining, toggle } = useTimer({
        interval: 10,
        target: round(sumIncludingIndex(steps, steps.length) / 1000),
    });
    const remainingInSeconds = round(remaining / 1000);
    const currentStep = getCurrentStep(steps, elapsed, isComplete);

    // Keep the screen on while this page is rendered:
    useWakeLock();

    // Once the timer completes, show the success page:
    useEffect(() => {
        if (isComplete) {
            router.replace({
                pathname: `/${slug}/success`,
                query: {
                    coffee,
                    volume,
                },
            });
        }
    }, [isComplete]);

    // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <NavLayout>
                <BackButton confirm={isRunning && confirmMessage} />
            </NavLayout>
            <MainLayout>
                <header className="text-center grid grid-cols-2">
                    <div>
                        <time className="block text-3xl font-bold">
                            {formatTime(remainingInSeconds)}
                        </time>
                        <span className="block">total left</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold">
                            {round(
                                steps[currentStep.index].start +
                                    currentStep.progress *
                                        steps[currentStep.index].toAdd
                            )}
                            &nbsp;g
                        </span>
                        <span className="block">current weight</span>
                    </div>
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
                <ButtonGroup>
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

const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const recipies = await getRecipeFiles();

    return {
        paths: locales.reduce(
            (acc, next) => [
                ...acc,
                ...recipies.map((p) => ({
                    params: {
                        slug: p.replace(/\.json/, ''),
                    },
                    locale: next,
                })),
            ],
            []
        ),
        fallback: false,
    };
};

const getStaticProps: GetStaticProps = async ({
    locale,
    params: { slug },
}) => ({
    props: {
        ...(await getRecipeBySlug(slug as string, locale)),
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default TimerPage;
export { getStaticPaths, getStaticProps };
