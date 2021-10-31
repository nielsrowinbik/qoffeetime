import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocalstorage } from 'rooks';
import type { FC } from 'react';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { queryArgToNumber } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import type { Recipe } from '../../lib/types';

import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import RatioSlider from '../../components/RatioSlider';
import RatioSliderHint from '../../components/RatioSliderHint';

const SLIDER_HEIGHT = 320;

const RecipePage: FC<Recipe> = ({
    defaultRatio,
    maxOutput,
    minOutput,
    name,
    slug,
    // tips,
}) => {
    const router = useRouter();
    const { output: outputParam, ratio: ratioParam } = router.query;

    // Parse ratio and output value from URL query parameters:
    const parsedRatio = queryArgToNumber(ratioParam);
    const parsedOutput = queryArgToNumber(outputParam);

    // Fetch previously used settings from localstorage:
    const [previousSettings] = useLocalstorage(slug);
    const previousOutput = previousSettings?.output;
    const previousRatio = previousSettings?.ratio;

    // Combine parsed and loaded values into final value, and add defaults
    // taken from the recipe's settings:
    const output = parsedOutput || previousOutput || minOutput;
    const ratio = parsedRatio || previousRatio || defaultRatio;

    // Show the hint on the ratio slider if it hasn't been seen before and
    // this recipe has adjustable settings:
    const [seenHint, setSeenHint] = useLocalstorage(
        'seenRatioSliderHint',
        false
    );
    const hasSettings = minOutput !== maxOutput;
    const shouldShowHint = hasSettings && !seenHint;

    // Update local storage on hint dismiss to indicate that we've seen the hint:
    const onDismiss = () => setSeenHint(true);

    // Don't render anything until we've parsed query parameters:
    if (!router.isReady) return null;

    return (
        <>
            <NavLayout>
                <BackButton />
            </NavLayout>
            <MainLayout>
                <h1 className="text-5xl font-bold">{name}</h1>
                <section>
                    <RatioSlider
                        height={SLIDER_HEIGHT}
                        maxOutput={maxOutput}
                        minOutput={minOutput}
                        output={output}
                        ratio={ratio}
                    />
                    <RatioSliderHint
                        height={SLIDER_HEIGHT}
                        isOpen={shouldShowHint}
                        onDismiss={onDismiss}
                    />
                </section>
                <section className="prose">
                    <h4>Recommended ratio: {defaultRatio}&nbsp;g/l</h4>
                    <p>
                        Increasing the ratio will use more coffee and produce a
                        stronger cup. Your current ratio setting is {ratio}
                        &nbsp;g/l.
                    </p>
                    {/* <h4>{name} tip of the day</h4>
                    <p>{tips[random(0, tips.length)]}</p> */}
                </section>
            </MainLayout>
            <FooterLayout>
                {ratio !== defaultRatio && (
                    <Button
                        onClick={() =>
                            router.replace(
                                {
                                    pathname: window.location.pathname,
                                    query: {
                                        output,
                                        ratio: defaultRatio,
                                    },
                                },
                                undefined,
                                { shallow: true }
                            )
                        }
                        variant="text"
                    >
                        Reset ratio
                    </Button>
                )}
                <Link
                    href={{
                        pathname: `/${slug}/timer`,
                        query: {
                            output: output,
                            ratio: ratio,
                        },
                    }}
                    passHref
                >
                    <Button>Next</Button>
                </Link>
            </FooterLayout>
        </>
    );
};

const getStaticPaths = async () => {
    const recipies = await getRecipeFiles();

    return {
        paths: recipies.map((p) => ({
            params: {
                slug: p.replace(/\.json/, ''),
            },
        })),
        fallback: false,
    };
};

const getStaticProps = async ({ params }) => {
    const recipe = await getRecipeBySlug(params.slug);

    return { props: { ...recipe } };
};

export default RecipePage;
export { getStaticPaths, getStaticProps };
