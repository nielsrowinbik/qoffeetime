import { mdiClose, mdiCoffeeOutline } from '@mdi/js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Webcam from 'react-webcam';

import NavLayout from '../../layouts/NavLayout';
import FullHeightLayout from '../../layouts/FullHeightLayout';
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

    const [coffee] = useState(queryArgToNumber(coffeeParam) || 0);
    const [recipe] = useState(queryArgToString(recipeParam));
    const [volume] = useState(queryArgToNumber(volumeParam) || 0);

    const { createBrew } = useBrews();
    const saveBrew = async () => {
        try {
            const savedBrew = await createBrew({
                coffee,
                recipe,
                volume,
            });
            router.replace('/timeline');
        } catch (e) {
            // TODO: Do something with the error other than logging it
            console.log(e);
        }
    };

    // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <NavLayout>
                <h1 className="font-semibold">Share your moment</h1>
            </NavLayout>
            <FullHeightLayout align="bottom">
                <Webcam
                    audio={false}
                    // className="w-full h-full object-cover"
                    videoConstraints={{
                        facingMode: 'environment',
                    }}
                />
                <div className="absolute bottom-0 right-0 left-0 flex flex-row items-center justify-around">
                    <button>Snap</button>
                </div>
            </FullHeightLayout>
            {/* <FooterLayout>
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
            </FooterLayout> */}
        </>
    );
};

const getStaticProps = async () => {
    const recipies = await getAllRecipies();

    return { props: { recipies } };
};

export default AddToTimelinePage;
export { getStaticProps };
