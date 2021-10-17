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

import Button from '../../components/Button';
import LargeIcon from '../../components/LargeIcon';

const TimerSuccessPage: FC<Recipe> = ({ name, slug }) => {
    const router = useRouter();
    const { output: outputParam, ratio: ratioParam } = router.query;
    const ratio = queryArgToNumber(ratioParam);
    const output = queryArgToNumber(outputParam);

    // Set up a value to fire confetti:
    const [shouldFire, setShouldFire] = useState(false);

    // Fire confetti upon page load:
    useEffect(() => {
        router.isReady && setShouldFire(true);
    }, [router.isReady]);

    // Store the settings for this succesful brew and store this as the
    // most recently used recipe:
    const { set: setLatestSettings } = useLocalstorage(slug, undefined);
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
