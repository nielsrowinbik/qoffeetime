import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { queryArgToNumber, round } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import type { Recipe } from '../../lib/types';

import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import RatioSlider from '../../components/RatioSlider';

const RecipePage: FC<Recipe> = ({
    defaultRatio,
    description,
    maxVolume,
    minVolume,
    name,
    slug,
}) => {
    const router = useRouter();
    const { coffee: coffeeParam, volume: volumeParam } = router.query;
    const coffee = queryArgToNumber(coffeeParam);
    const volume = queryArgToNumber(volumeParam);

    const volumeWithDefault = volume || minVolume;
    const coffeeWithDefault =
        coffee || (defaultRatio / 1000) * volumeWithDefault;
    const ratio = round((coffeeWithDefault / volumeWithDefault) * 1000);

    // const onCoffeeChange = (e) =>
    //     router.replace(
    //         {
    //             pathname: slug,
    //             query: {
    //                 coffee: e.target.value,
    //                 volume: volumeWithDefault,
    //             },
    //         },
    //         undefined,
    //         { shallow: true }
    //     );

    const onVolumeChange = (volume: number) =>
        router.replace(
            {
                pathname: slug,
                query: {
                    coffee: round((ratio / 1000) * volume),
                    volume: volume,
                },
            },
            undefined,
            { shallow: true }
        );

    // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <NavLayout>
                <BackButton />
            </NavLayout>
            <MainLayout>
                <h1 className="text-5xl font-bold">{name}</h1>
                <section className="mt-10 mb-16">
                    <RatioSlider
                        max={maxVolume}
                        min={minVolume}
                        onChange={onVolumeChange}
                        ratio={ratio}
                        value={volumeWithDefault}
                    />
                </section>
                <section>
                    <p>
                        <strong>
                            We recommend: {minVolume}ml,{' '}
                            {round((defaultRatio / 1000) * minVolume)}g
                        </strong>
                    </p>
                    <p>{description}</p>
                </section>
            </MainLayout>
            <FooterLayout>
                <Link
                    href={{
                        pathname: `/${slug}/timer`,
                        query: {
                            coffee: round(coffeeWithDefault),
                            volume: round(volumeWithDefault),
                        },
                    }}
                    passHref
                >
                    <Button>Next</Button>
                </Link>
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

export default RecipePage;
export { getStaticPaths, getStaticProps };
