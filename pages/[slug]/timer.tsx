import classNames from 'classnames';
import template from 'lodash.template';
import { mdiClose, mdiPlayOutline, mdiPause, mdiStop } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useWakeLock } from 'react-screen-wake-lock';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { queryArgToNumber } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';

import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import useTimer from '../../lib/timer';
import { useEffect } from 'react';

// Format a number of seconds to a string in the HH:MM:ss format:
const formatTime = (
    seconds: number,
    h = Math.floor(seconds / 3600),
    m = Math.floor((seconds % 3600) / 60),
    s = seconds % 60
) => [h, m > 9 ? m : '0' + m, s > 9 ? s : '0' + s].filter((s) => s).join(':');

// Sum all step durations up and including the provided index:
const sumIncludingIndex = (steps, index: number) =>
    steps
        .slice(0, Math.min(index + 1, steps.length))
        .reduce((total: number, { duration }) => total + duration, 0) * 1000;

const getCurrentStep = (steps, elapsed: number, isComplete: boolean) => {
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
        remaining: Math.round(remaining / 1000),
    };
};

const RecipeTimer = ({ name, ...recipe }) => {
    const router = useRouter();
    const { coffee: coffeeParam, volume: volumeParam } = router.query;
    const coffee = queryArgToNumber(coffeeParam);
    const volume = queryArgToNumber(volumeParam);

    const steps = recipe.steps.map((step) => ({
        ...step,
        description: template(step.description)({ coffee, volume }),
    }));
    const target = Math.round(sumIncludingIndex(steps, steps.length) / 1000);

    const { elapsed, isComplete, isRunning, remaining, reset, toggle } =
        useTimer({
            target,
        });
    const remainingInSeconds = Math.round(remaining / 1000);
    const currentStep = getCurrentStep(steps, elapsed, isComplete);

    // Keep the screen on while this page is rendered:
    const { request, release } = useWakeLock();
    useEffect(() => {
        request();

        return () => {
            release();
        };
    }, []);

    return (
        <>
            <NavLayout>
                <Link href="/" passHref>
                    <IconButton icon={mdiClose} small />
                </Link>
            </NavLayout>
            <MainLayout>
                <header className="text-center">
                    <time className="text-3xl font-bold">
                        {formatTime(remainingInSeconds)}
                    </time>
                    <span className="block">total left</span>
                </header>
                <section className="m-6">
                    <time className="text-7xl font-bold">
                        {formatTime(currentStep.remaining)}
                    </time>
                    <p className="text-2xl font-semibold mt-2">
                        {steps[currentStep.index].description}
                    </p>
                </section>
                <section>
                    <ol>
                        {steps.map(({ description, duration }, stepIndex) => {
                            const isCurrentStep =
                                currentStep.index === stepIndex;
                            const className = classNames(
                                'text-lg leading-5 text-white text-base mr-2',
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
                                    <span className="text-black text-opacity-30 font-bold flex-none mx-2">
                                        {stepIndex + 1}
                                    </span>
                                    <time className="border border-white rounded-full w-10 h-10 text-xs flex items-center justify-center flex-none font-semibold mr-3">
                                        {formatTime(duration)}
                                    </time>
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
                    <Button icon={mdiStop} onClick={() => reset()}>
                        Stop
                    </Button>
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

export default RecipeTimer;
export { getStaticPaths, getStaticProps };
