import { useLocalstorage } from 'rooks';
import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';

import FooterLayout from '../layouts/FooterLayout';
import FullHeightLayout from '../layouts/FullHeightLayout';
import { getAllRecipies } from '../lib/recipies';
import type { Recipe } from '../lib/types';

import Button from '../components/Button';
import RecipeSlider from '../components/RecipeSlider';

const IndexPage: FC<{ recipies: Recipe[] }> = (props) => {
    const [latest] = useLocalstorage('latest', undefined);
    const recipies = withSettings(props.recipies).sort(byLatestFirst(latest));
    const [activeIndex, setActiveIndex] = useState(0);
    const selected = recipies[activeIndex];

    return (
        <>
            <FullHeightLayout>
                <div className="pt-6 h-full">
                    <RecipeSlider
                        onActiveIndexChange={setActiveIndex}
                        recipies={recipies}
                    />
                </div>
            </FullHeightLayout>
            <FooterLayout>
                <Link
                    href={{
                        pathname: `/${selected.slug}`,
                        query: {
                            ...(!!selected.latest && {
                                output: selected.latest.output,
                            }),
                            ...(!!selected.latest && {
                                ratio: selected.latest.ratio,
                            }),
                        },
                    }}
                    passHref
                >
                    <Button>Brew {selected.name}</Button>
                </Link>
            </FooterLayout>
        </>
    );
};

const getStaticProps = async () => {
    const recipies = await getAllRecipies();

    return { props: { recipies } };
};

const byLatestFirst = (latest: string) => (a: Recipe, b: Recipe) => {
    if (!!latest) {
        if (a.slug === latest) return -1;
        if (b.slug === latest) return 1;
    }
    return a.name.localeCompare(b.name);
};

const withSettings = (recipies: Recipe[]) =>
    recipies.map(({ slug, ...recipe }) => {
        const { value } = useLocalstorage(slug, undefined);
        const latest = value as { output: number; ratio: number };

        return {
            ...recipe,
            latest,
            slug,
        };
    });

export default IndexPage;
export { getStaticProps };
