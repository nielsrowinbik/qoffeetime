export const vibrate = (duration: number) =>
    window?.navigator?.vibrate?.(duration);
