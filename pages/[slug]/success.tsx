import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { mdiCheck } from '@mdi/js';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Confetti from 'react-canvas-confetti';
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';

import NavLayout from '../../layouts/NavLayout';
import MainLayout from '../../layouts/MainLayout';
import FooterLayout from '../../layouts/FooterLayout';
import { useBrews } from '../../lib/brews';
import { queryArgToNumber } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import type { Recipe } from '../../lib/types';

import Button from '../../components/Button';
import LargeIcon from '../../components/LargeIcon';

const TimerSuccessPage: FC<Recipe> = ({ name, slug }) => {
    const { t } = useTranslation();

    const router = useRouter();
    const { coffee: coffeeParam, volume: volumeParam } = router.query;
    const coffee = queryArgToNumber(coffeeParam);
    const volume = queryArgToNumber(volumeParam);

    // Set up a value to fire confetti:
    const [shouldFire, setShouldFire] = useState(false);

    // Fire confetti upon page load:
    useEffect(() => {
        router.isReady && setShouldFire(true);
    }, [router.isReady]);

    // Save the finished brew:
    const { createBrew } = useBrews();

    const saveBrew = () =>
        toast.promise(
            createBrew({
                coffee,
                recipe: name,
                volume,
            }),
            {
                loading: t('timeline:loading'),
                success: () => {
                    router.replace('/timeline');
                    return t('timeline:success.toast');
                },
                error: (error) => {
                    console.error(error);
                    return t('timeline:error');
                },
            }
        );

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
                        onClick={() => setShouldFire(true)}
                    />
                </section>
                <section className="flex-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-semibold text-center">
                        {t('timeline:success.message', { recipe: name })}
                    </h1>
                </section>
                <section className="flex-1 flex flex-col justify-end">
                    <h2 className="text-center font-bold">
                        {t('timeline:save.question')}
                    </h2>
                </section>
            </MainLayout>
            <FooterLayout>
                <>
                    <Button onClick={() => saveBrew()}>
                        {t('timeline:save.confirm')}
                    </Button>
                    <Link href="/" passHref replace>
                        <Button variant="text">
                            {t('timeline:save.deny')}
                        </Button>
                    </Link>
                </>
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
        ...(await serverSideTranslations(locale, ['common', 'timeline'])),
    },
});

export default TimerSuccessPage;
export { getStaticPaths, getStaticProps };
