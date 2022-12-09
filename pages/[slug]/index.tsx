import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import type { FC } from "react";
import FooterLayout from "@/layouts/FooterLayout";
import { NextSeo as Head } from "next-seo";
import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import NavLayout from "@/layouts/NavLayout";
import RatioSlider from "@/components/RatioSlider";
import RatioSliderHint from "@/components/RatioSliderHint";
import type { Recipe } from "contentlayer/generated";
import { allRecipes } from "contentlayer/generated";
import { queryArgToNumber } from "@/lib/helpers";
import { useLocalstorageState } from "rooks";
import { useRouter } from "next/router";

const SLIDER_HEIGHT = 320;

const RecipePage: FC<Recipe> = ({
  defaultRatio,
  maxOutput,
  minOutput,
  name,
  slug,
  tagline,
  tips,
}) => {
  const router = useRouter();
  const { output: outputParam, ratio: ratioParam } = router.query;

  // Parse ratio and output value from URL query parameters:
  const parsedRatio = queryArgToNumber(ratioParam);
  const parsedOutput = queryArgToNumber(outputParam);

  // Fetch previously used settings from localstorage:
  const [previousSettings] = useLocalstorageState<{
    output: number;
    ratio: number;
  }>(slug);
  const previousOutput = previousSettings?.output;
  const previousRatio = previousSettings?.ratio;

  // Combine parsed and loaded values into final value, and add defaults
  // taken from the recipe's settings:
  const output = parsedOutput || previousOutput || minOutput;
  const ratio = parsedRatio || previousRatio || defaultRatio;

  // Show the hint on the ratio slider if it hasn't been seen before and
  // this recipe has adjustable settings:
  const [seenHint, setSeenHint] = useLocalstorageState(
    "seenRatioSliderHint",
    false
  );
  const hasSettings = minOutput !== maxOutput;
  const shouldShowHint = hasSettings && !seenHint;

  // Update local storage on hint dismiss to indicate that we've seen the hint:
  const onDismiss = () => setSeenHint(true);

  // Don't render anything until we've parsed query parameters:
  // if (!router.isReady) return null;

  return (
    <>
      <Head description={tagline} title={name} />
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
          <h4>Tips</h4>
          <ul>
            <li>
              The recommended ratio for this brewing method is {defaultRatio}{" "}
              g/l. Increasing the ratio will use more coffee and produce a
              stronger cup.
            </li>
            {tips?.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
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
        >
          <Button>Next</Button>
        </Link>
      </FooterLayout>
    </>
  );
};

const getStaticPaths = () => {
  return {
    paths: allRecipes.map((r) => ({
      params: {
        slug: r.slug,
      },
    })),
    fallback: false,
  };
};

const getStaticProps = async ({ params }) => {
  const recipe = allRecipes.find((recipe) => recipe.slug === params.slug);

  return { props: { ...recipe } };
};

export default RecipePage;
export { getStaticPaths, getStaticProps };
