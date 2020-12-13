export const minmax = (num: number, min: number, max: number) =>
    Math.min(max, Math.max(min, num));

export const sum = (arr: number[]) =>
    arr.reduce((total, item) => (total += item), 0);

export const valuesForKey = (arr: any[], key: string) =>
    arr.map((item) => item[key]);
