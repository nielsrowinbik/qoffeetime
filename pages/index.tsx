import { useLocalstorage } from 'rooks';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';

import FooterLayout from '../layouts/FooterLayout';
import FullHeightLayout from '../layouts/FullHeightLayout';
import { getAllRecipies } from '../lib/recipies';
import type { Recipe } from '../lib/types';

import Button from '../components/Button';
import RecipeSlider from '../components/RecipeSlider';

const IndexPage: FC<{ recipies: Recipe[] }> = (props) => {
    const [latest] = useLocalstorage('latest', undefined);
    const [recipies, setRecipies] = useState(props.recipies);
    const [selected, setSelected] = useState(recipies[0]);

    const onChange = useCallback(
        (index: number) => setSelected(recipies[index]),
        [setSelected]
    );

    // Sort lastly used recipe first upon first render,
    // preventing a client-server mismatch upon hydration:
    useEffect(() => {
        setRecipies(recipies.sort(byLatestFirst(latest)));
        setSelected(recipies[0]);
    }, []);

    return (
        <>
            <FullHeightLayout className="pt-6">
                <RecipeSlider onChange={onChange} recipies={recipies} />
            </FullHeightLayout>
            <FooterLayout>
                <Link href={`/${selected.slug}`} passHref>
                    <Button>Brew {selected.name}</Button>
                </Link>
            </FooterLayout>
        </>
    );
};

const getStaticProps = async () => {
    const recipies = await getAllRecipies();

    return { props: { recipies } };
};

const byLatestFirst = (latest: string) => (a: Recipe, b: Recipe) => {
    if (!!latest) {
        if (a.slug === latest) return -1;
        if (b.slug === latest) return 1;
    }
    return a.name.localeCompare(b.name);
};

export default IndexPage;
export { getStaticProps };
