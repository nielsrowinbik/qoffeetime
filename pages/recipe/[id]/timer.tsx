import Link from "next/link";
import { useRouter } from "next/router";

import { useTimer } from "../../../hooks/use-timer";
import { parseMillisecondsIntoTimeStamp } from "../../../utils/parser";

import recipe from "../../../recipies/v60.json";

const RecipeTimer = () => {
    const router = useRouter();
    const { id } = router.query;

    const timer = useTimer(recipe.steps);

    const onStopClick = () => {
        if (confirm("Do you want to cancel the timer?")) {
            timer.stop();
            router.push(`/recipe/${id}`);
        }
    };

    return (
        <main>
            <nav>
                <Link href="/">
                    <button>back</button>
                </Link>
            </nav>
            <article>
                <div>
                    <time>
                        {parseMillisecondsIntoTimeStamp(timer.remaining)}
                    </time>
                    <span>&nbsp;</span>
                    <span>total left</span>
                </div>
                <h1>
                    {parseMillisecondsIntoTimeStamp(timer.currentStepRemaining)}
                </h1>
                <h2>{recipe.steps[timer.currentStepIndex].description}</h2>
                <ul>
                    {recipe.steps.map((step, i) => {
                        const content = (
                            <>
                                <time>
                                    {parseMillisecondsIntoTimeStamp(
                                        step.duration * 1000
                                    )}
                                </time>
                                <span>&nbsp;</span>
                                <span>{step.description}</span>
                            </>
                        );

                        if (timer.currentStepIndex === i)
                            return (
                                <li key={i}>
                                    <strong>{content}</strong>
                                </li>
                            );

                        return <li key={i}>{content}</li>;
                    })}
                </ul>
                {timer.elapsed === 0 && (
                    <button onClick={timer.start}>Start</button>
                )}
                {timer.elapsed > 0 && (
                    <button onClick={timer.toggle}>
                        {timer.isRunning ? "Pause" : "Continue"}
                    </button>
                )}
                {timer.elapsed > 0 && (
                    <button onClick={onStopClick}>Stop</button>
                )}
            </article>
        </main>
    );
};

export default RecipeTimer;
