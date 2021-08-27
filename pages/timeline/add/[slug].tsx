import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useState } from 'react';
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';

import FooterLayout from '../../../layouts/FooterLayout';
import MainLayout from '../../../layouts/MainLayout';
import NavLayout from '../../../layouts/NavLayout';
import { useBrews } from '../../../lib/brews';
import { queryArgToNumber, round } from '../../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../../lib/recipies';
import type { Recipe } from '../../../lib/types';

import BackButton from '../../../components/BackButton';
import Button from '../../../components/Button';
import RatioSlider from '../../../components/RatioSlider';

const AddToTimelinePage: FC<Recipe> = ({
    defaultRatio,
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
    const [comment, setComment] = useState('');

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

    const { createBrew } = useBrews();
    const saveBrew = () =>
        toast.promise(
            createBrew({
                coffee: coffeeWithDefault,
                recipe: name,
                volume: volumeWithDefault,
                ...(comment !== '' && { comment }),
            }),
            {
                loading: 'Saving your brew...',
                success: () => {
                    router.replace('/timeline');
                    return 'Successfully saved your brew!';
                },
                error: (error) => {
                    console.error(error);
                    return 'Something went wrong saving your brew';
                },
            }
        );

    // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <NavLayout>
                <BackButton />
            </NavLayout>
            <MainLayout className="flex flex-col">
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
                    <textarea
                        autoFocus={false}
                        className="bg-white bg-opacity-10 p-3 resize-none placeholder-white placeholder-opacity-80 w-full"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="How was it?"
                        rows={4}
                        tabIndex={-1}
                    />
                </section>
            </MainLayout>
            <FooterLayout>
                <Button onClick={saveBrew}>Save {name} brew</Button>
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

export default AddToTimelinePage;
export { getStaticPaths, getStaticProps };
