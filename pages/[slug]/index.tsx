import { mdiClose } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { queryArgToNumber, round } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import type { Recipe } from '../../lib/types';

import Button from '../../components/Button';
import GoBack from '../../components/GoBack';
import IconButton from '../../components/IconButton';
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

    return (
        <>
            <NavLayout>
                <GoBack>
                    <IconButton icon={mdiClose} small />
                </GoBack>
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

export default RecipePage;
export { getStaticPaths, getStaticProps };
