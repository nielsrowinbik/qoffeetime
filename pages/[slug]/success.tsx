import { mdiCheck } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Confetti from 'react-canvas-confetti';
import { useLocalstorage } from 'rooks';
import type { FC } from 'react';

import NavLayout from '../../layouts/NavLayout';
import MainLayout from '../../layouts/MainLayout';
import FooterLayout from '../../layouts/FooterLayout';
import { queryArgToNumber, vibrate } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import type { Recipe } from '../../lib/types';

import BuyMeACoffee from '../../components/BuyMeACoffee';
import Button from '../../components/Button';
import LargeIcon from '../../components/LargeIcon';

import app from '../../package.json';

// TODO: Fill the <head> with relevant tags

const TimerSuccessPage: FC<Recipe> = ({
    defaultRatio,
    minOutput,
    name,
    slug,
}) => {
    const router = useRouter();
    const { output: outputParam, ratio: ratioParam } = router.query;

    // Parse ratio and output value from URL query parameters:
    const parsedRatio = queryArgToNumber(ratioParam);
    const parsedOutput = queryArgToNumber(outputParam);

    // Fetch previously used settings from localstorage:
    const [previousSettings, setLatestSettings] = useLocalstorage(slug);
    const previousOutput = previousSettings?.output;
    const previousRatio = previousSettings?.ratio;

    // Combine parsed and loaded values into final value, and add defaults
    // taken from the recipe's settings:
    const output = parsedOutput || previousOutput || minOutput;
    const ratio = parsedRatio || previousRatio || defaultRatio;

    // Set up a value to fire confetti:
    const [shouldFire, setShouldFire] = useState(false);

    // Fire confetti upon page load:
    useEffect(() => {
        router.isReady && setShouldFire(true);
    }, [router.isReady]);

    // Store the settings for this succesful brew and store this as the
    // most recently used recipe:
    const { set: setLatest } = useLocalstorage('latest', undefined);
    useEffect(() => {
        setLatestSettings({ output, ratio });
        setLatest(slug);
    }, [router.isReady]);

    // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <NavLayout />
            <MainLayout>
                <Confetti
                    className="fixed inset-0 z-0 w-full h-full"
                    disableForReducedMotion
                    fire={shouldFire}
                    onFire={() => setShouldFire(false)}
                    origin={{ x: 0.5, y: 0.3 }}
                    particleCount={75}
                    spread={60}
                    ticks={600}
                />
                <section className="flex-1 flex flex-col items-center justify-center z-10">
                    <LargeIcon
                        icon={mdiCheck}
                        onClick={() => {
                            vibrate(50);
                            setShouldFire(true);
                        }}
                    />
                </section>
                <section className="flex-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-semibold text-center">
                        All done, enjoy your {name}!
                    </h1>
                </section>
                <section className="flex-1" />
            </MainLayout>
            <FooterLayout>
                <p className="text-center text-xs opacity-80">
                    Enjoying{' '}
                    <span className="inline-block first-letter:uppercase">
                        {app.name}
                    </span>
                    ?
                </p>
                <a
                    className="inline-block w-full py-3 opacity-80"
                    href="https://www.buymeacoffee.com/nielsbik"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <BuyMeACoffee className="w-2/6 mx-auto" />
                </a>
                <Link href="/" passHref replace>
                    <Button>Continue</Button>
                </Link>
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

export default TimerSuccessPage;
export { getStaticPaths, getStaticProps };
