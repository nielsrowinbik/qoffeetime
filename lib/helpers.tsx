import template from 'lodash.template';
import { Fragment } from 'react';

export const formatTime = (
    ms: number,
    padZeroMinutes: boolean = true,
    seconds = toSeconds(ms),
    h = Math.floor(seconds / 3600),
    m = Math.floor((seconds % 3600) / 60),
    s = seconds % 60,
    p = padZeroMinutes ? '0' : ''
) =>
    [h, m > 9 ? m : `${p}${m}`, s > 9 ? s : `0${s}`].filter((s) => s).join(':');

export const envToBool = (val: string): boolean => {
    try {
        return !!JSON.parse(val.toLowerCase());
    } catch (e) {
        return false;
    }
};

export const insertBreakAtCapital = (str: string) => {
    const split = str.split(/(?=[A-Z])/);

    return (
        <>
            {split.map((part, index) => {
                // Only insert when the part doesn't end with a space (it'll automatically break there without a hint)
                // and when it's not the last part (that one doesn't need breaking):
                if (part[part.length - 1] !== ' ' && index !== split.length - 1)
                    return (
                        <Fragment key={index}>
                            {part}
                            <wbr />
                        </Fragment>
                    );

                // Otherwise, just return the part:
                return part;
            })}
        </>
    );
};

export const queryArgToNumber = (
    arg: undefined | string | string[]
): number | undefined => {
    if (!arg) return undefined;
    if (typeof arg === 'string') return parseFloat(arg);
    return parseFloat(arg[0]);
};

export const queryArgToString = (
    arg: undefined | string | string[]
): string | undefined => {
    if (!arg) return undefined;
    if (typeof arg === 'string') return arg;
    return arg[0];
};

export const round = (val: number, decimals: number = 0): number =>
    +val.toFixed(decimals);

export const toMilliseconds = (val: number) => val * 1000;

export const toSeconds = (val: number) => round(val / 1000);

export const useTemplate = (string: string, data: Record<string, any>) =>
    template(string, { interpolate: /{{([\s\S]+?)}}/g })(data);
