import Link from 'next/link';

import { getAllRecipies } from '../lib/recipies';

export default function Index({ recipies }) {
    return (
        <div className="flex flex-col justify-center">
            <ul>
                <li>
                    <Link href="/timeline">Timeline</Link>
                </li>
                {recipies.map(({ slug, name }) => (
                    <li key={slug}>
                        <Link href={`/${slug}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const recipies = await getAllRecipies();

    return { props: { recipies } };
}
