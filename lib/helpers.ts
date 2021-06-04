export const formatTime = (
    seconds: number,
    padZeroMinutes: boolean = true,
    h = Math.floor(seconds / 3600),
    m = Math.floor((seconds % 3600) / 60),
    s = seconds % 60,
    p = padZeroMinutes ? '0' : ''
) =>
    [h, m > 9 ? m : `${p}${m}`, s > 9 ? s : `0${s}`].filter((s) => s).join(':');

export const queryArgToNumber = (
    arg: undefined | string | string[]
): number | undefined => {
    if (!arg) return undefined;
    if (typeof arg === 'string') return parseFloat(arg);
    return parseFloat(arg[0]);
};

export const round = Math.round;
