import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useLocalstorage } from 'rooks';

import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import NavLayout from '../../layouts/NavLayout';
import { queryArgToNumber } from '../../lib/helpers';
import { getRecipeFiles, getRecipeBySlug } from '../../lib/recipies';
import type { Recipe } from '../../lib/types';

import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import RatioSlider from '../../components/RatioSlider';

const RecipePage: FC<Recipe> = ({
    defaultRatio,
    description,
    maxOutput,
    minOutput,
    name,
    slug,
}) => {
    const router = useRouter();
    const { output: outputParam, ratio: ratioParam } = router.query;
    const ratio = queryArgToNumber(ratioParam);
    const output = queryArgToNumber(outputParam);

    const outputWithDefault = output || minOutput;
    const ratioWithDefault = ratio || defaultRatio;

    // Show the hint on the ratio slider if this recipe has adjustable settings and hasn't been used previously:
    const hasLatest = useLocalstorage(slug)[0] !== null;
    const hasSettings = minOutput !== maxOutput;
    const shouldShowHint = hasSettings && !hasLatest;

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
                        maxOutput={maxOutput}
                        minOutput={minOutput}
                        output={outputWithDefault}
                        ratio={ratioWithDefault}
                        showHint={shouldShowHint}
                    />
                </section>
                <section>
                    <p>
                        <strong>We recommend: {defaultRatio}&nbsp;g/l</strong>{' '}
                        {ratioWithDefault !== defaultRatio && (
                            <span className="opacity-40">
                                (current: {ratio}&nbsp;g/l)
                            </span>
                        )}
                    </p>
                    <p>{description}</p>
                </section>
            </MainLayout>
            <FooterLayout>
                {ratioWithDefault !== defaultRatio && (
                    <Button
                        onClick={() =>
                            router.replace(
                                {
                                    pathname: window.location.pathname,
                                    query: {
                                        output: outputWithDefault,
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
                            output: outputWithDefault,
                            ratio: ratioWithDefault,
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
