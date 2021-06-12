import { mdiClose, mdiCoffeeOutline } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import FullHeightLayout from '../../layouts/FullHeightLayout';
import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import { useBrews } from '../../lib/brews';
import { queryArgToNumber, queryArgToString } from '../../lib/helpers';
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

    // We were redirected here if all parameters are present:
    const wasRedirected = [coffeeParam, recipeParam, volumeParam].every(
        (item) => !!item
    );

    const coffee = queryArgToNumber(coffeeParam);
    const recipe = queryArgToString(recipeParam);
    const volume = queryArgToNumber(volumeParam);

    const { createBrew } = useBrews();
    const saveBrew = async () => {
        try {
            const recipeName = recipies.find(
                ({ slug }) => slug === recipe
            ).name;
            await createBrew({
                coffee,
                recipe: recipeName,
                volume,
            });
            router.replace('/timeline');
        } catch (e) {
            // TODO: Do something with the error other than logging it
            console.log(e);
        }
    };

    // If we were redirect, store the brew immediately:
    useEffect(() => {
        if (!wasRedirected) return;
        saveBrew();
    }, [wasRedirected]);

    // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <FullHeightLayout></FullHeightLayout>
            <FooterLayout>
                {wasRedirected ? null : (
                    <>
                        <Button onClick={saveBrew}>Save brew</Button>
                        <GoBack>
                            <Button variant="text">Cancel</Button>
                        </GoBack>
                    </>
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
