import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "contentlayer/generated";
import classNames from "classnames";
import { insertBreakAtCapital } from "@/lib/helpers";
import { useCallback } from "react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

type SliderRecipe = Recipe & {
  latest?: {
    output: number;
    ratio: number;
  };
};

const RecipeSlide = ({ latest, slug, tagline, ...recipe }: SliderRecipe) => {
  // Insert `<wbr />` tags within words containing multiple capitals:
  const name = insertBreakAtCapital(recipe.name);

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
      <div className="relative h-full bg-brand">
        <Image
          alt={recipe.name}
          className="rounded object-cover object-center opacity-60 mix-blend-multiply"
          fill
          priority
          src={recipe.image}
        />
        <header className="absolute flex h-full flex-col justify-end p-4">
          <h2 className="w-5/6 text-7xl font-bold">{name}</h2>
          <h3 className="mt-10 h-full max-h-32 break-words text-lg">
            {tagline}
          </h3>
        </header>
      </div>
    </Link>
  );
};

type RecipeSliderProps = {
  onChange: (index: number) => void;
  pagination?: boolean;
  recipies: SliderRecipe[];
};

const SLIDE_WIDTH = 90;

const RecipeSlider = ({
  onChange,
  pagination = true,
  recipies,
}: RecipeSliderProps) => {
  const [emblaRef, embla] = useEmblaCarousel({ skipSnaps: true });

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
    embla.on("select", onSelect);

    // Stop listening when component unmounts:
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <>
      <div className="flex-1 overflow-hidden" ref={emblaRef}>
        <div
          className="grid h-full grid-flow-col gap-3"
          style={{
            gridAutoColumns: `${SLIDE_WIDTH}%`,
            transform: `translate3d(${(100 - SLIDE_WIDTH) / 2}vw, 0px, 0px)`,
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
              "w-2.5 h-2.5 mr-2.5 last:mr-0 rounded-full border border-current",
              {
                "bg-transparent": index !== getSelectedIndex(),
                "bg-current": index === getSelectedIndex(),
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
