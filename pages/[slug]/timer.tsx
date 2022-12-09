import Button, { ButtonGroup } from "@/components/Button";
import { mdiPause, mdiPlayOutline, mdiStop } from "@mdi/js";
import { useBrewTimer, useWakeLock } from "@/lib/timer";

import BackButton from "@/components/BackButton";
import CurrentStepDetails from "@/components/CurrentStepDetails";
import type { FC } from "react";
import FooterLayout from "@/layouts/FooterLayout";
import GoBack from "@/components/GoBack";
import { NextSeo as Head } from "next-seo";
import MainLayout from "@/layouts/MainLayout";
import NavLayout from "@/layouts/NavLayout";
import type { Recipe } from "contentlayer/generated";
import { allRecipes } from "contentlayer/generated";
import StepsList from "@/components/StepsList";
import TimerStat from "@/components/TimerStat";
import { queryArgToNumber } from "lib/helpers";
import { useEffect } from "react";
import { useLocalstorageState } from "rooks";
import { useRouter } from "next/router";

const TimerPage: FC<Recipe> = ({
  defaultRatio,
  minOutput,
  name,
  slug,
  tagline,
  ...recipe
}) => {
  const confirmMessage = "Do you want to cancel the timer?";

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

  const {
    current,
    isComplete,
    isReset,
    isRunning,
    remainingCurrent,
    remainingTotal,
    start,
    steps,
    stop,
    weight,
  } = useBrewTimer(recipe.steps, output, ratio);

  // // Once the timer completes, show the success page:
  useEffect(() => {
    isComplete &&
      router.replace({
        pathname: `/${slug}/success`,
        query: {
          output,
          ratio,
        },
      });
  }, [isComplete]);

  // // Keep the screen on while this page is rendered:
  useWakeLock();

  // // Don't render anything until we've parsed query parameters:
  // if (!router.isReady) return null;

  return (
    <>
      <Head description={tagline} title={name} />
      <NavLayout>
        <BackButton confirm={isRunning && confirmMessage} />
      </NavLayout>
      <MainLayout>
        <header className="grid auto-cols-fr grid-flow-col">
          <TimerStat as="time" label="total left" value={remainingTotal} />
          <TimerStat label="current weight" value={`${weight} g`} />
        </header>
        <section className="mx-4 my-6">
          <CurrentStepDetails
            description={steps[current].description}
            remaining={remainingCurrent}
          />
        </section>
        <section className="mt-4 overflow-auto">
          <StepsList currentIndex={current} steps={steps} />
        </section>
      </MainLayout>
      <FooterLayout>
        <ButtonGroup>
          <Button
            hidden={isRunning}
            icon={mdiPlayOutline}
            inGroup={!isReset}
            onClick={() => start()}
          >
            Start
          </Button>
          <Button
            hidden={!isRunning}
            icon={mdiPause}
            inGroup={!isReset}
            onClick={() => stop()}
          >
            Pause
          </Button>
          <GoBack confirm={isRunning && confirmMessage}>
            <Button hidden={isReset} icon={mdiStop} inGroup variant="dark">
              Stop
            </Button>
          </GoBack>
        </ButtonGroup>
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

export default TimerPage;
export { getStaticPaths, getStaticProps };
