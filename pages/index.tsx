import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import FooterLayout from '../layouts/FooterLayout';
import FullHeightLayout from '../layouts/FullHeightLayout';
import { getAllRecipies } from '../lib/recipies';

import Button from '../components/Button';
import RecipeSlide from '../components/RecipeSlide';

const Index = ({ recipies }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { name, slug } = recipies[activeIndex];

    return (
        <>
            <FullHeightLayout>
                <div className="pb-10 pt-6 h-full">
                    <Swiper
                        centeredSlides
                        className="h-full"
                        slidesPerView={1.15}
                        spaceBetween={12}
                        onActiveIndexChange={({ activeIndex }) =>
                            setActiveIndex(activeIndex)
                        }
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
                    <Button>Prepare {name}</Button>
                </Link>
            </FooterLayout>
        </>
    );
};

const getStaticProps = async () => {
    const recipies = await getAllRecipies();

    return { props: { recipies } };
};

export default Index;
export { getStaticProps };
