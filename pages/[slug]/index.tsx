import { mdiClose } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { queryArgToNumber, round } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';

import Button from '../../components/Button';
import IconButton from '../../components/IconButton';

const Recipe = ({
    defaultRatio,
    maxVolume,
    minVolume,
    name,
    slug,
    tagline,
}) => {
    const router = useRouter();
    const { coffee: coffeeParam, volume: volumeParam } = router.query;
    const coffee = queryArgToNumber(coffeeParam);
    const volume = queryArgToNumber(volumeParam);

    const volumeWithDefault = volume || minVolume;
    const coffeeWithDefault =
        coffee || (defaultRatio / 1000) * volumeWithDefault;
    const ratio = round((coffeeWithDefault / volumeWithDefault) * 1000);

    const onCoffeeChange = (e) =>
        router.replace(
            {
                pathname: slug,
                query: {
                    coffee: e.target.value,
                    volume: volumeWithDefault,
                },
            },
            undefined,
            { shallow: true }
        );

    const onVolumeChange = (e) =>
        router.replace(
            {
                pathname: slug,
                query: {
                    coffee: (ratio / 1000) * e.target.value,
                    volume: e.target.value,
                },
            },
            undefined,
            { shallow: true }
        );

    return (
        <>
            <NavLayout>
                <Link href="/">
                    <a>
                        <IconButton icon={mdiClose} small />
                    </a>
                </Link>
            </NavLayout>
            <MainLayout>
                <h1>{name}</h1>
                <p>
                    <label>
                        <span>Cofee: </span>
                        <input
                            type="range"
                            max={100}
                            min={1}
                            onChange={onCoffeeChange}
                            step={1}
                            value={coffeeWithDefault}
                        />
                        <span>({round(coffeeWithDefault)} gr)</span>
                    </label>
                </p>
                <p>
                    <label>
                        <span>Volume: </span>
                        <input
                            type="range"
                            max={maxVolume}
                            min={minVolume}
                            onChange={onVolumeChange}
                            step={10}
                            value={volumeWithDefault}
                        />
                        <span>({round(volumeWithDefault)} ml)</span>
                    </label>
                </p>
            </MainLayout>
            <FooterLayout>
                {/* FIXME: This wrapping is ugly and should be done in Button component */}
                <Link
                    href={{
                        pathname: `/${slug}/timer`,
                        query: {
                            coffee: round(coffeeWithDefault),
                            volume: round(volumeWithDefault),
                        },
                    }}
                >
                    <a className="flex-1">
                        <Button>Go to timer</Button>
                    </a>
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

export default Recipe;
export { getStaticPaths, getStaticProps };
