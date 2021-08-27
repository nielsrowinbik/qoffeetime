import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useState } from 'react';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

import FooterLayout from '../layouts/FooterLayout';
import FullHeightLayout from '../layouts/FullHeightLayout';
import { useSortRecipiesByBrews } from '../lib/brews';
import { getAllRecipies } from '../lib/recipies';
import type { Recipe } from '../lib/types';

import Button from '../components/Button';
import RecipeSlider from '../components/RecipeSlider';
import TimelineButton from '../components/TimelineButton';

const IndexPage: FC<{ recipies: Recipe[] }> = (props) => {
    const { isReady, recipies } = useSortRecipiesByBrews(props.recipies);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!isReady) return null;

    const { name, slug } = recipies[activeIndex];

    return (
        <>
            <FullHeightLayout>
                <TimelineButton />
                <div className="pt-6 h-full">
                    <RecipeSlider
                        onActiveIndexChange={setActiveIndex}
                        recipies={recipies}
                    />
                </div>
            </FullHeightLayout>
            <FooterLayout>
                <Link href={`/${slug}`} passHref>
                    <Button>Brew {name}</Button>
                </Link>
            </FooterLayout>
        </>
    );
};

const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        recipies: await getAllRecipies(locale),
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default IndexPage;
export { getStaticProps };
