import { mdiPlayOutline, mdiPause, mdiStop } from '@mdi/js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { FC } from 'react';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { queryArgToNumber } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import { useBrewTimer, useWakeLock } from '../../lib/timer';
import type { Recipe } from '../../lib/types';

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

    const {
        current,
        isComplete,
        isReset,
        isRunning,
        remainingCurrent,
        remainingTotal,
        start,
        steps,
        stop,
        weight,
    } = useBrewTimer(recipe.steps, output, ratio);

    // // Once the timer completes, show the success page:
    useEffect(() => {
        isComplete &&
            router.replace({
                pathname: `/${slug}/success`,
                query: {
                    output,
                    ratio,
                },
            });
    }, [isComplete]);

    // // Keep the screen on while this page is rendered:
    useWakeLock();

    // // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <NavLayout>
                <BackButton confirm={isRunning && confirmMessage} />
            </NavLayout>
            <MainLayout>
                <header className="grid grid-flow-col auto-cols-fr">
                    <TimerStat
                        as="time"
                        label="total left"
                        value={remainingTotal}
                    />
                    <TimerStat label="current weight" value={`${weight} g`} />
                </header>
                <section className="mx-4 my-6">
                    <CurrentStepDetails
                        description={steps[current].description}
                        remaining={remainingCurrent}
                    />
                </section>
                <section className="overflow-auto mt-4">
                    <StepsList currentIndex={current} steps={steps} />
                </section>
            </MainLayout>
            <FooterLayout>
                <ButtonGroup>
                    <Button
                        hidden={isRunning}
                        icon={mdiPlayOutline}
                        onClick={() => start()}
                    >
                        Start
                    </Button>
                    <Button
                        hidden={!isRunning}
                        icon={mdiPause}
                        onClick={() => stop()}
                    >
                        Pause
                    </Button>
                    <GoBack confirm={isRunning && confirmMessage}>
                        <Button
                            hidden={isReset}
                            icon={mdiStop}
                            inGroup
                            variant="dark"
                        >
                            Stop
                        </Button>
                    </GoBack>
                </ButtonGroup>
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

export default TimerPage;
export { getStaticPaths, getStaticProps };
