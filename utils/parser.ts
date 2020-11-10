export const parseMillisecondsIntoTimeStamp = (
    milliseconds: number,
    includeHours = false
) => {
    //Get hours from milliseconds
    const hours = milliseconds / (1000 * 60 * 60);
    const absoluteHours = Math.floor(hours);
    const hourString = absoluteHours > 9 ? absoluteHours : `0${absoluteHours}`;

    //Get remainder from hours and convert to minutes
    const minutes = (hours - absoluteHours) * 60;
    const absoluteMinutes = Math.floor(minutes);
    const minuteString =
        absoluteMinutes > 9 ? absoluteMinutes : `0${absoluteMinutes}`;

    //Get remainder from minutes and convert to seconds
    const seconds = (minutes - absoluteMinutes) * 60;
    const absoluteSeconds = Math.floor(seconds);
    const secondString =
        absoluteSeconds > 9 ? absoluteSeconds : `0${absoluteSeconds}`;

    return [hourString, minuteString, secondString]
        .slice(includeHours ? 0 : 1, 3)
        .join(":");
};
