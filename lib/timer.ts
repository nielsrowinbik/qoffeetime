import { useEffect, useRef, useState } from 'react';
import { useWakeLock as useWakeLockHook } from 'react-screen-wake-lock';

interface TimerOptions {
    interval?: number;
    target: number;
}

const useInterval = (callback: CallableFunction, delay: number) => {
    const savedCallback = useRef<CallableFunction>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export const useTimer = (options: TimerOptions) => {
    const { interval = 1000, target } = options;

    // Store whether the timer is running in state:
    const [isRunning, setIsRunning] = useState(false);

    // Store both current and previous tick timestamps so we can
    // compute the difference between them:
    const lastTick = useRef(0);

    // Store total elapsed time in state:
    const [elapsed, setElapsed] = useState(0);

    // Expose a function to update elapsed based on previous state:
    const updateElapsed = () =>
        setElapsed(
            (elapsed: number) => elapsed + (Date.now() - lastTick.current)
        );

    // Compute the remaining time:
    const remaining = Math.max(target * 1000 - elapsed, 0);

    // Determine whether the timer is complete:
    const isComplete = remaining === 0;

    // Every tick, update the elapsed time and our reference to
    // the current tick:
    const tick = () => {
        updateElapsed();
        lastTick.current = Date.now();
    };

    // Tick every second when timer is running:
    useInterval(tick, isRunning && !isComplete ? interval : null);

    // Expose a method to reset the timer:
    const reset = () => {
        lastTick.current = 0;
        setIsRunning(false);
        setElapsed(0);
    };

    // Expose a method to start the timer:
    const start = () => {
        lastTick.current = Date.now();
        setIsRunning(true);
    };

    // Expose a method to stop (pause) the timer:
    const stop = () => {
        updateElapsed();
        setIsRunning(false);
    };

    // Expose a method to toggle the timer:
    const toggle = () => (isRunning ? stop() : start());

    return {
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

export const useWakeLock = () => {
    const { request, release } = useWakeLockHook();

    useEffect(() => {
        request();

        return () => {
            release();
        };
    }, []);
};
