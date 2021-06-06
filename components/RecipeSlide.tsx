import Image from 'next/image';
import Link from 'next/link';

import type { Recipe } from '../lib/types';

export default function RecipeSlide({
    image,
    slug,
    tagline,
    ...recipe
}: Recipe) {
    // Nasty hack insering a space between 'Aero' and 'Press' in order for it to render correctly.
    // Keeping it as one word will incorrectly break up the word, but it is the correct spelling, so
    // this will have to do.
    const name = recipe.name === 'AeroPress' ? 'Aero Press' : recipe.name;

    return (
        <Link href={`/${slug}`}>
            <a className="w-full h-full relative block pb-12">
                <article className="w-full h-full relative block">
                    <div className="bg-brewtime-red relative w-full h-full">
                        <Image
                            className="mix-blend-darken opacity-60 rounded"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center center"
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
}
