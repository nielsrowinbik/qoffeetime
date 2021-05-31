import Image from 'next/image';
import Link from 'next/link';

// FIXME: The solution to have the <a> and the <article> both take up the full height isn't pretty...

export default function RecipeSlide({ name, slug, tagline, ...recipe }) {
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
                            <h2 className="text-7xl font-bold">{name}</h2>
                            <h3 className="text-2xl font-medium my-10">
                                {tagline}
                            </h3>
                        </header>
                    </div>
                </article>
            </a>
        </Link>
    );
}
