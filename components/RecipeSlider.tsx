import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Recipe } from '../lib/types';

SwiperCore.use([Pagination]);

type RecipeSlideProps = Recipe & {
    href: string;
    priority?: boolean;
};

const RecipeSlide = ({
    href,
    priority = false,
    slug,
    tagline,
    ...recipe
}: RecipeSlideProps) => {
    // Nasty hack insering a space between 'Aero' and 'Press' in order for it to render correctly.
    // Keeping it as one word will incorrectly break up the word, but it is the correct spelling, so
    // this will have to do.
    const name = recipe.name === 'AeroPress' ? 'Aero Press' : recipe.name;

    return (
        <Link href={href}>
            <a className="w-full h-full relative block">
                <article className="w-full h-full relative block">
                    <div className="bg-brewtime-red relative w-full h-full">
                        <Image
                            className="mix-blend-darken opacity-60 rounded"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center center"
                            priority={priority}
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
    hrefPrefix?: string;
    onActiveIndexChange: (activeIndex: number) => void;
    pagination?: boolean;
    recipies: Recipe[];
};

const RecipeSlider = ({
    hrefPrefix = '',
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
            {recipies.map((recipe, index) => (
                <SwiperSlide key={recipe.slug}>
                    <RecipeSlide
                        href={`${hrefPrefix}/${recipe.slug}`}
                        priority={index <= 1}
                        {...recipe}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default RecipeSlider;