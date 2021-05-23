import template from 'lodash.template';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import TimerLayout from '../../layouts/timer';

// FIXME: Duplicate code (see index.tsx)
const queryArgToNumber = (
    arg: undefined | string | string[]
): number | undefined => {
    if (!arg) return undefined;
    if (typeof arg === 'string') return parseFloat(arg);
    return parseFloat(arg[0]);
};

export default function RecipeTimer({ name, ...recipe }) {
    const router = useRouter();
    const { coffee: coffeeParam, volume: volumeParam } = router.query;
    const coffee = queryArgToNumber(coffeeParam);
    const volume = queryArgToNumber(volumeParam);

    const steps = recipe.steps.map((step) => ({
        ...step,
        description: template(step.description)({ coffee, volume }),
    }));

    return (
        <TimerLayout>
            <Link href="/">Go back</Link>
            <h1>Timer for {name}</h1>
            <pre>{JSON.stringify(steps, null, 2)}</pre>
        </TimerLayout>
    );
}

export async function getStaticPaths() {
    const recipies = await getRecipeFiles();

    return {
        paths: recipies.map((p) => ({
            params: {
                slug: p.replace(/\.json/, ''),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const recipe = await getRecipeBySlug(params.slug);

    return { props: { ...recipe } };
}
