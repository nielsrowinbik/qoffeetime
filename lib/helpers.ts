export const queryArgToNumber = (
    arg: undefined | string | string[]
): number | undefined => {
    if (!arg) return undefined;
    if (typeof arg === 'string') return parseFloat(arg);
    return parseFloat(arg[0]);
};

export const round = Math.round;