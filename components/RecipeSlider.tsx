import classNames from 'classnames';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { useEffect } from 'react';

import type { Recipe } from '../lib/types';

type SliderRecipe = {
    latest?: {
        output: number;
        ratio: number;
    };
    name: Recipe['name'];
    slug: Recipe['slug'];
    tagline: Recipe['tagline'];
};

const RecipeSlide = ({ latest, slug, tagline, ...recipe }: SliderRecipe) => {
    // For the AeroPress recipe we'll need to specify where to break the word, or it'll
    // show up wrong. Otherwise, just use the name the way it was specified in the recipe.
    const name =
        recipe.name === 'AeroPress' ? (
            <span>
                Aero
                <wbr />
                Press
            </span>
        ) : (
            recipe.name
        );

    return (
        <Link
            href={{
                pathname: `/${slug}`,
                query: {
                    ...(!!latest && { output: latest.output }),
                    ...(!!latest && { ratio: latest.ratio }),
                },
            }}
        >
            <a className="relative h-full bg-brewtime-red">
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
            </a>
        </Link>
    );
};

type RecipeSliderProps = {
    onChange: (index: number) => void;
    pagination?: boolean;
    recipies: SliderRecipe[];
};

const RecipeSlider = ({
    onChange,
    pagination = true,
    recipies,
}: RecipeSliderProps) => {
    const [emblaRef, embla] = useEmblaCarousel();

    // Helper function to safely get the currently selected index:
    const getSelectedIndex = useCallback(
        () => (embla ? embla.selectedScrollSnap() : 0),
        [embla]
    );

    // Call `onChange` when a slide is selected:
    const onSelect = useCallback(
        () => onChange(getSelectedIndex()),
        [getSelectedIndex, onChange]
    );

    // Listen to events so we can call `onChange`:
    useEffect(() => {
        if (!embla) return;

        // Listen for select events:
        embla.on('select', onSelect);

        // Stop listening when component unmounts:
        return () => {
            embla.off('select', onSelect);
        };
    }, [embla, onSelect]);

    return (
        <>
            <div className="overflow-hidden flex-1" ref={emblaRef}>
                <div
                    className="h-full grid grid-flow-col gap-3"
                    style={{
                        gridAutoColumns: '90%',
                        transform: `translate3d(5vw, 0px, 0px)`,
                    }}
                >
                    {recipies.map((recipe) => (
                        <RecipeSlide key={recipe.slug} {...recipe} />
                    ))}
                </div>
            </div>
            {pagination && (
                <div className="mt-6 flex flex-row items-center justify-center">
                    {recipies.map(({ slug }, index) => {
                        const className = classNames(
                            'w-2.5 h-2.5 mr-2.5 last:mr-0 rounded-full border border-white',
                            {
                                'bg-transparent': index !== getSelectedIndex(),
                                'bg-white': index === getSelectedIndex(),
                            }
                        );
                        return <div className={className} key={slug} />;
                    })}
                </div>
            )}
        </>
    );
};

export default RecipeSlider;
