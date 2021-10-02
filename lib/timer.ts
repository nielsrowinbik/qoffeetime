import { useCallback, useEffect, useRef, useState } from 'react';
import { useWakeLock as useWakeLockHook } from 'react-screen-wake-lock';

import { formatTime, round, toMilliseconds, useTemplate } from './helpers';
import type { ParsedRecipeStep, RecipeStep } from './types';

type TickFunction = (elapsed: number, delta: number) => any;

export const useAnimationFrame = (onFrame: TickFunction) => {
    const elapsed = useRef(0);
    const frame = useRef<number>(null);
    const init = useRef(performance.now());
    const last = useRef(performance.now());

    const animate = () => {
        // console.log("do something, because we're running");
        const now = performance.now();
        const delta = now - last.current;
        elapsed.current += delta;

        // Call user defined `onFrame` function:
        onFrame(elapsed.current, delta);

        last.current = now;
        frame.current = requestAnimationFrame(animate);
    };

    const start = () => {
        if (!frame.current) {
            init.current = performance.now();
            last.current = performance.now();
            frame.current = requestAnimationFrame(animate);
        }
    };

    const stop = () => {
        cancelAnimationFrame(frame.current);
        frame.current = null;
    };

    return {
        start,
        stop,
    };
};

export const useBrewTimer = (
    rawSteps: RecipeStep[],
    output: number,
    ratio: number
) => {
    const [isComplete, setComplete] = useState(false);

    const coffee = round((ratio / 1000) * output);
    const targetVars = { coffee, output };
    const steps = parseSteps(rawSteps, targetVars);
    const total = sumUntil(steps);

    const [current, setCurrent] = useState(0);
    const [remainingCurrent, setRemainingCurrent] = useState(
        formatTime(steps[current].duration)
    );
    const [remainingTotal, setRemainingTotal] = useState(formatTime(total));
    const [weight, setWeight] = useState(0);

    const onFrame = useCallback<TickFunction>(
        (elapsed) => {
            // Update the total remaining time:
            const remainingTotal = Math.max(total - elapsed, 0);
            setRemainingTotal(formatTime(remainingTotal));

            // Find the currently active step:
            const current = findCurrent(steps, elapsed);
            const last = steps.length - 1;
            const next = Math.min(current + 1, last);
            const previous = Math.max(current - 1, 0);

            // Compute the remaining time within the current step:
            const totalIncludingCurrent = sumUntil(steps, current);
            const remainingCurrent = Math.max(
                Math.abs(elapsed - totalIncludingCurrent),
                0
            );

            // If there's less than half a second left in the current step,
            // we mark the next step as being the current:
            if (remainingCurrent < 500 && current !== last) {
                setCurrent(current + 1);
                setRemainingCurrent(formatTime(steps[next].duration));
            } else {
                setCurrent(current);
                setRemainingCurrent(formatTime(remainingCurrent));
            }

            // Compute the progress of the current step:
            // Not that here, we ignore our intervention from aboe so that
            // the weight doesn't jump as we artifically start the next step.
            const progressCurrent = Math.max(
                1 - remainingCurrent / steps[current].duration,
                0
            );

            // Compute the current target weight:
            const weightCurrent = steps[current].target;
            const weightPrevious = current === 0 ? 0 : steps[previous].target;
            const weightToAdd = weightCurrent - weightPrevious;
            const weight = weightPrevious + progressCurrent * weightToAdd;
            setWeight(round(weight));
        },
        [steps, total]
    );
    const animation = useAnimationFrame(onFrame);

    useEffect(() => {
        if (weight === steps[steps.length - 1].target) {
            setComplete(true);
            animation.stop();
        }
    }, [animation, steps]);

    return {
        ...animation,
        current,
        isComplete,
        remainingCurrent,
        remainingTotal,
        steps,
        weight,
    };
};

const findCurrent = (steps: ParsedRecipeStep[], elapsed: number): number =>
    steps.findIndex((_, i: number) => elapsed <= sumUntil(steps, i));

const parseSteps = (
    steps: RecipeStep[],
    targetVars: Record<string, any>
): ParsedRecipeStep[] =>
    steps.reduce((res, step, i) => {
        const target = parseInt(useTemplate(step.target, targetVars));
        const description = useTemplate(step.description, { target });
        const duration = toMilliseconds(step.duration);

        return [
            ...res,
            {
                ...step,
                description,
                duration,
                target: !!target ? target : res[Math.max(i - 1, 0)]?.target,
            },
        ];
    }, []);

type AnyStep = {
    description: string;
    duration: number;
    target?: number | string;
};

// FIXME: Steps shouldn't *have* to be parsed when calling this, but I don't know
// how to not force this with TypeScript
// TODO: Make sure field can only be the keys within the steps object that are numbers
const sumUntil = (
    steps: ParsedRecipeStep[],
    index: number = steps.length - 1,
    field: string = 'duration'
): number =>
    steps
        .slice(0, Math.min(index + 1, steps.length))
        .reduce((total: number, step) => total + (step[field] || 0), 0);

export const useWakeLock = () => {
    const { request, release } = useWakeLockHook();

    const visibilityChangeHandler = () => {
        if (!document.hidden) request();
        else release();
    };

    useEffect(() => {
        request();
        document.addEventListener('visibilitychange', visibilityChangeHandler);

        return () => {
            release();
            document.removeEventListener(
                'visibilitychange',
                visibilityChangeHandler
            );
        };
    }, []);
};
