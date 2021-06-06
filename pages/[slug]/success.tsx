import { mdiCheck } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import NavLayout from '../../layouts/NavLayout';
import MainLayout from '../../layouts/MainLayout';
import FooterLayout from '../../layouts/FooterLayout';
import { queryArgToNumber } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import type { Recipe } from '../../lib/types';

import Button from '../../components/Button';
import LargeIcon from '../../components/LargeIcon';

const TimerSuccessPage: FC<Recipe> = ({ name, slug }) => {
    const router = useRouter();
    const { coffee: coffeeParam, volume: volumeParam } = router.query;
    const coffee = queryArgToNumber(coffeeParam);
    const volume = queryArgToNumber(volumeParam);

    return (
        <>
            <NavLayout />
            <MainLayout>
                <section className="flex-1 flex flex-col items-center justify-center">
                    <LargeIcon icon={mdiCheck} />
                </section>
                <section className="flex-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-semibold text-center">
                        All done, enjoy your {name}!
                    </h1>
                </section>
                <section className="flex-1 flex flex-col justify-end">
                    <h2 className="text-center font-bold">
                        Would you like to save your brew?
                    </h2>
                </section>
            </MainLayout>
            <FooterLayout>
                <Link
                    href={{
                        href: `/timeline/add`,
                        query: {
                            coffee,
                            recipe: slug,
                            volume,
                        },
                    }}
                    passHref
                >
                    <Button className="mb-2">Save</Button>
                </Link>
                <Link href="/" passHref>
                    <Button className="mb-2" variant="text">
                        No thanks
                    </Button>
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
