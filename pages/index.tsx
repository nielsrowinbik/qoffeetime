import { mdiHistory } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import FooterLayout from '../layouts/FooterLayout';
import FullHeightLayout from '../layouts/FullHeightLayout';
import { getAllRecipies } from '../lib/recipies';
import type { Recipe } from '../lib/types';

import Button from '../components/Button';
import RecipeSlide from '../components/RecipeSlide';

SwiperCore.use([Pagination]);

const IndexPage: FC<{ recipies: Recipe[] }> = ({ recipies }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { name, slug } = recipies[activeIndex];

    return (
        <>
            <FullHeightLayout>
                <Link href="/timeline">
                    <a className="absolute bg-brewtime-red shadow-sm rounded-full py-1 px-3 z-10 right-10 top-10 flex flex-row items-center text-sm">
                        <Icon className="mr-2" path={mdiHistory} size="20px" />
                        <span>Timeline</span>
                    </a>
                </Link>
                <div className="pt-6 h-full">
                    <Swiper
                        centeredSlides
                        className="h-full"
                        slidesPerView={1.15}
                        spaceBetween={12}
                        onActiveIndexChange={({ activeIndex }) =>
                            setActiveIndex(activeIndex)
                        }
                        pagination
                    >
                        {recipies.map((recipe) => (
                            <SwiperSlide key={recipe.slug}>
                                <RecipeSlide {...recipe} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
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

const getStaticProps = async () => {
    const recipies = await getAllRecipies();

    return { props: { recipies } };
};

export default IndexPage;
export { getStaticProps };
