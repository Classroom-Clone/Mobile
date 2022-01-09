import { parse, format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { DateEnum } from '../enums/DateEnum';

export const dateFormat = (date: Date | null | undefined, timeFormat: DateEnum): string =>
    date ? format(date, timeFormat) : '';

export const stringDateFormat = (date: string | null | undefined, timeFormat: DateEnum): string =>
    date ? format(parseISO(date), timeFormat) : '';

export const timeStampFormat = (
    timestamp: string | null | undefined,
    timeFormat: DateEnum
): string => (timestamp ? format(utcToZonedTime(parseISO(timestamp), 'UTC'), timeFormat) : '');

export const fromUTCTimestampTimezoneTimespan = (
    timestamp: string | null | undefined,
    timeFormat: DateEnum
): Date => {
    if (!timestamp) {
        return new Date(0);
    }
    const utcTime = parse(timestamp, timeFormat, new Date(0));
    utcTime.setMinutes(utcTime.getMinutes() - utcTime.getTimezoneOffset());
    return utcTime;
};
