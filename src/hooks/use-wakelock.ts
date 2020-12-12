import { useState, useEffect, useRef } from "react";

export const useWakeLock = (shouldHaveWakeLock = false) => {
    const wakeLock = useRef<WakeLockSentinel>();

    const [wakeLockActive, setWakeLockActive] = useState(false);

    useEffect(() => {
        const requestWakeLock = async () => {
            if (shouldHaveWakeLock) {
                try {
                    // Request a wakelock:
                    wakeLock.current = await navigator.wakeLock.request(
                        "screen"
                    );

                    // Update the state accordingly:
                    setWakeLockActive(true);

                    // Make sure to grab the wakelock again when the page becomes visible:
                    document.addEventListener("visibilitychange", async () => {
                        if (
                            wakeLock.current !== null &&
                            document.visibilityState === "visible"
                        ) {
                            requestWakeLock();
                        }
                    });
                } catch (e) {
                    // If something went wrong, set the state accordingly:
                    setWakeLockActive(false);
                }
            }
        };

        requestWakeLock();

        return () => wakeLock.current?.release();
    }, [shouldHaveWakeLock]);

    return { wakeLockActive };
};
