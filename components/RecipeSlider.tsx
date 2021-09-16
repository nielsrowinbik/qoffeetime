import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Recipe } from '../lib/types';

SwiperCore.use([Pagination]);

type SliderRecipe = {
    latest?: {
        coffee: number;
        volume: number;
    };
    name: Recipe['name'];
    slug: Recipe['slug'];
    tagline: Recipe['tagline'];
};

const RecipeSlide = ({ latest, slug, tagline, ...recipe }: SliderRecipe) => {
    // Nasty hack insering a space between 'Aero' and 'Press' in order for it to render correctly.
    // Keeping it as one word will incorrectly break up the word, but it is the correct spelling, so
    // this will have to do.
    const name = recipe.name === 'AeroPress' ? 'Aero Press' : recipe.name;

    return (
        <Link
            href={{
                pathname: `/${slug}`,
                query: {
                    ...(!!latest && { coffee: latest.coffee }),
                    ...(!!latest && { volume: latest.volume }),
                },
            }}
        >
            <a className="w-full h-full relative block">
                <article className="w-full h-full relative block">
                    <div className="bg-brewtime-red relative w-full h-full">
                        <Image
                            className="mix-blend-darken opacity-60 rounded"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center center"
                            priority
                            src={`/assets/images/${slug}.jpg`}
                        />
                        <header className="absolute h-full flex flex-col justify-end p-4">
                            <h2 className="text-7xl font-bold w-3/4 break-words">
                                {name}
                            </h2>
                            <h3 className="text-lg mt-10 break-words h-full max-h-32">
                                {tagline}
                            </h3>
                        </header>
                    </div>
                </article>
            </a>
        </Link>
    );
};

type RecipeSliderProps = {
    onActiveIndexChange: (activeIndex: number) => void;
    pagination?: boolean;
    recipies: SliderRecipe[];
};

const RecipeSlider = ({
    onActiveIndexChange,
    pagination = true,
    recipies,
}: RecipeSliderProps) => {
    const className = classNames('h-full', { 'pb-12': pagination });

    return (
        <Swiper
            centeredSlides
            className={className}
            slidesPerView={1.15}
            spaceBetween={12}
            onActiveIndexChange={({ activeIndex }) =>
                onActiveIndexChange(activeIndex)
            }
            pagination={pagination}
        >
            {recipies.map((recipe) => (
                <SwiperSlide key={recipe.slug}>
                    <RecipeSlide {...recipe} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default RecipeSlider;
