import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';

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
                    <Button>Save {name} brew</Button>
                </Link>
                {/* <GoBack>
                    <Button variant="text">Cancel</Button>
                </GoBack> */}
            </FooterLayout>
        </>
    );
};

const getStaticProps = async () => {
    const recipies = await getAllRecipies();

    return { props: { recipies } };
};

export default AddToTimelineLandingPage;
export { getStaticProps };
