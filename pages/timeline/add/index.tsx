import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';
import type { GetStaticProps } from 'next';

import FooterLayout from '../../../layouts/FooterLayout';
import MainLayout from '../../../layouts/MainLayout';
import NavLayout from '../../../layouts/NavLayout';
import { useSortRecipiesByBrews } from '../../../lib/brews';
import { getAllRecipies } from '../../../lib/recipies';
import type { Recipe } from '../../../lib/types';

import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton';
import RecipeSlider from '../../../components/RecipeSlider';

const AddToTimelineLandingPage: FC<{ recipies: Recipe[] }> = (props) => {
    const { t } = useTranslation();

    const { isReady, recipies } = useSortRecipiesByBrews(props.recipies);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!isReady) return null;

    const { name, slug } = recipies[activeIndex];

    return (
        <>
            <NavLayout>
                <BackButton />
            </NavLayout>
            <MainLayout className="!px-0">
                <div className="h-full">
                    <RecipeSlider
                        hrefPrefix="/timeline/add"
                        onActiveIndexChange={setActiveIndex}
                        pagination={false}
                        recipies={recipies}
                    />
                </div>
            </MainLayout>
            <FooterLayout>
                <Link href={`/timeline/add/${slug}`} passHref>
                    <Button>{t('timeline:cta.add', { recipe: name })}</Button>
                </Link>
                {/* <GoBack>
                    <Button variant="text">Cancel</Button>
                </GoBack> */}
            </FooterLayout>
        </>
    );
};

const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        recipies: await getAllRecipies(locale),
        ...(await serverSideTranslations(locale, ['common', 'timeline'])),
    },
});

export default AddToTimelineLandingPage;
export { getStaticProps };
