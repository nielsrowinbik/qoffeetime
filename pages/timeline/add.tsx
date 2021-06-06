import { mdiClose, mdiCoffeeOutline } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { useBrews } from '../../lib/brews';
import { queryArgToNumber } from '../../lib/helpers';
import { getAllRecipies } from '../../lib/recipies';
import type { Recipe } from '../../lib/types';

import Button from '../../components/Button';
import GoBack from '../../components/GoBack';
import IconButton from '../../components/IconButton';

const AddToTimelinePage: FC<{ recipies: Recipe[] }> = ({ recipies }) => {
    const router = useRouter();
    const {
        coffee: coffeeParam,
        recipe: recipeParam,
        volume: volumeParam,
    } = router.query;

    const wasRedirected = [coffeeParam, recipeParam, volumeParam].every(
        (item) => !!item
    );

    const [coffee] = useState(queryArgToNumber(coffeeParam) || 0);
    const [recipe] = useState(recipeParam || undefined);
    const [volume] = useState(queryArgToNumber(volumeParam) || 0);

    const saveBrew = () => {
        // TODO: Actually store brew.
        router.replace('/timeline');
    };

    return (
        <>
            <NavLayout>
                {!wasRedirected && (
                    <GoBack>
                        <IconButton icon={mdiClose} small />
                    </GoBack>
                )}
            </NavLayout>
            <MainLayout>
                <p>
                    Let's add your <strong>{recipe}</strong> brew to your log.
                </p>
            </MainLayout>
            <FooterLayout>
                <Button onClick={saveBrew}>Save brew</Button>
                {wasRedirected ? (
                    <Link href="/" passHref>
                        <Button variant="text">Cancel</Button>
                    </Link>
                ) : (
                    <GoBack>
                        <Button variant="text">Cancel</Button>
                    </GoBack>
                )}
            </FooterLayout>
        </>
    );
};

const getStaticProps = async () => {
    const recipies = await getAllRecipies();

    return { props: { recipies } };
};

export default AddToTimelinePage;
export { getStaticProps };
