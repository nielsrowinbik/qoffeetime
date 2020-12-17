import { useEffect, useRef } from "react";

// TODO: Reaquire wakelock if it's released and the document becomes visible again

export const useWakeLock = (shouldHaveWakeLock = true) => {
    const savedWakeLock = useRef<WakeLockSentinel>();

    useEffect(() => {
        const requestWakelock = async () => {
            if (!savedWakeLock.current || savedWakeLock.current.released) {
                const wakeLock = window.navigator.wakeLock;
                savedWakeLock.current = await wakeLock.request("screen");
            }
        };

        const cleanup = () => {
            savedWakeLock.current?.release();
            window.removeEventListener("visibilitychange", requestWakelock);
        };

        if (shouldHaveWakeLock) {
            requestWakelock();
            window.addEventListener("visibilitychange", requestWakelock);
        } else {
            cleanup();
        }

        return cleanup;
    }, [shouldHaveWakeLock]);

    return {};
};
