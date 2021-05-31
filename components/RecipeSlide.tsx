import Image from 'next/image';
import Link from 'next/link';

export default function RecipeSlide({ name, slug, tagline, ...recipe }) {
    return (
        <Link href={`/${slug}`}>
            <a>
                <article>
                    <Image
                        className="bg-brewtime-red mix-blend-darken rounded"
                        layout="fill"
                        src="https://via.placeholder.com/500x700"
                    />
                    <header className="absolute h-full flex flex-col justify-end p-2">
                        <h2 className="text-7xl font-bold">{name}</h2>
                        <h3 className="text-2xl font-medium my-10">
                            {tagline}
                        </h3>
                    </header>
                </article>
            </a>
        </Link>
    );
}
