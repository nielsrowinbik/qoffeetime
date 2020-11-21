import { useCallback, useState, useMemo, useEffect } from "react";

import { useInterval } from "../hooks/use-interval";
import { usePrevious } from "../hooks/use-previous";
import { sum, valuesForKey } from "../utils/helpers";

type Step = {
    description: string;
    duration: number;
};

export const useTimer = (userSteps: Step[]) => {
    // // Add a "start" field to every step that was passed in so we
    // // can determine which step is the current:
    const steps = useMemo(
        () =>
            userSteps.map((step, i) => ({
                // We copy the original step as not to lose any nformation.
                ...step,

                // We convert step duration, which is configured in seconds,
                // to milliseconds here. This overwrites the original duration
                // value!
                duration: step.duration * 1000,

                // The start is determined by the sum of all durations of
                // the previous steps. Once these durations have passed,
                // the current step is active. Finally, subtract 1000 milliseconds
                // to always start a round "early".
                start:
                    userSteps
                        .slice(0, i)
                        .reduce(
                            (total, { duration }) => total + duration * 1000,
                            0
                        ) - 1000,
            })),
        [userSteps.length]
    );

    // Store whether the timer is running in state:
    const [isRunning, setIsRunning] = useState(false);

    // Store both current and previous tick timestamps so we can
    // compute the difference between them:
    const [currentTick, setCurrentTick] = useState(0);
    const previousTick = usePrevious(currentTick);

    // Store total elapsed time in state:
    const [elapsed, setElapsed] = useState(0);

    // Compute the total time needed to complete this timer:
    const totalTime = useMemo(
        () => sum(valuesForKey(userSteps, "duration")) * 1000,
        [userSteps.length]
    );

    // Compute the remaining time:
    const remaining = useMemo(() => Math.max(totalTime - elapsed, 0), [
        elapsed,
    ]);

    // // Determine whether the timer is complete:
    const isComplete = useMemo(() => remaining === 0, [remaining]);

    // // Compute the current step's index:
    const currentStepIndex = useMemo(() => {
        // find the index of the first step that we find of which we have not yet
        // passed the start moment:
        const index = steps.findIndex(({ start }) => elapsed < start);

        // If found, the current step is the step before the one we found.
        // If not found, we're on the last step.
        return (index === -1 ? steps.length : index) - 1;
    }, [elapsed]);

    // // Compute how much time is remaining in the current step
    const currentStepRemaining = useMemo(() => {
        // Get the sum of durations of all previous steps (excluding current):
        const totalPreviousSteps = sum(
            valuesForKey(steps.slice(0, currentStepIndex), "duration")
        );
        // Compute the progress within the current step:
        const progressCurrentStep = elapsed - totalPreviousSteps;

        // Subtract the progress within this step from the total duration:
        return Math.max(
            steps[currentStepIndex].duration - progressCurrentStep,
            0
        );
    }, [currentStepIndex, elapsed]);

    // Every tick, update the current tick in state:
    const tick = () => setCurrentTick(Date.now());

    // Tick every 100 millisecons when timer is running:
    useInterval(tick, isRunning && !isComplete ? 100 : null);

    // Update the total elapsed time by adding the difference
    // between the current and the previous tick to the previous total:
    useEffect(() => {
        // Don't update if we're not running:
        if (!isRunning) return;

        // Don't update if the previous tick was 0:
        if (!previousTick || previousTick === 0) return;

        setElapsed((elapsed) => elapsed + (currentTick - previousTick));
    }, [currentTick]);

    // Expose a method to reset the timer:
    const reset = useCallback(() => {
        setIsRunning(false);
        setElapsed(0);
        setCurrentTick(0);
    }, []);

    // Expose a method to start the timer:
    const start = useCallback(() => {
        setCurrentTick(Date.now());
        setIsRunning(true);
    }, []);

    // Expose a method to stop (pause) the timer:
    const stop = useCallback(() => {
        setIsRunning(false);
        // FIXME: this fixes pause functionality, but we don't count the time between the last tick and us pausing the timer
        setCurrentTick(0);
    }, []);

    // Expose a method to toggle the timer:
    const toggle = useCallback(() => {
        if (isRunning) return stop();
        return start();
    }, [isRunning]);

    return {
        currentStepIndex,
        currentStepRemaining,
        elapsed,
        isComplete,
        isRunning,
        remaining,
        reset,
        start,
        stop,
        toggle,
    };
};
