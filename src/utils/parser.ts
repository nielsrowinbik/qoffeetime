export const parseMillisecondsIntoTimeStamp = (milliseconds: number) => {
    //Get minutes from milliseconds
    const minutes = milliseconds / (1000 * 60);
    const absoluteMinutes = Math.floor(minutes);
    const minuteString = absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    const seconds = (minutes - absoluteMinutes) * 60;
    const absoluteSeconds = Math.floor(seconds);
    const secondString =
        absoluteSeconds > 9 ? absoluteSeconds : `0${absoluteSeconds}`;

    return [minuteString, secondString].join(":");
};
