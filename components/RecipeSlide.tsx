import Image from 'next/image';
import Link from 'next/link';

// FIXME: The solution to have the <a> and the <article> both take up the full height isn't pretty...

export default function RecipeSlide({ slug, tagline, ...recipe }) {
    // Nasty hack insering a space between 'Aero' and 'Press' in order for it to render correctly.
    // Keeping it as one word will incorrectly break up the word, but it is the correct spelling, so
    // this will have to do.
    const name = recipe.name === 'AeroPress' ? 'Aero Press' : recipe.name;

    return (
        <Link href={`/${slug}`}>
            <a className="w-full h-full relative block">
                <article className="w-full h-full relative block">
                    <div className="bg-brewtime-red relative w-full h-full">
                        <Image
                            className="mix-blend-darken rounded"
                            layout="fill"
                            src="https://via.placeholder.com/500x700"
                        />
                        <header className="absolute h-full flex flex-col justify-end p-2">
                            <h2 className="text-7xl font-bold w-8/12 break-words">
                                {name}
                            </h2>
                            <h3 className="text-lg my-10 break-words">
                                {tagline}
                            </h3>
                        </header>
                    </div>
                </article>
            </a>
        </Link>
    );
}
