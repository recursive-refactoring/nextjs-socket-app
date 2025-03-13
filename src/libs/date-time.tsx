import { DATE_TIME_FORMAT, TIME_INTERVALS } from "@/constants/date-time";
import dayjs from "dayjs";

const {
  JUST_NOW,
  MINUTES_IN_DAY,
  MINUTES_IN_HOUR,
  MINUTES_IN_MONTH,
  MINUTES_IN_YEAR,
} = TIME_INTERVALS ?? {};

export const nowDate = () => dayjs();

export const localeDateTime = (date: string) =>
  new Date(dayjs(date?.slice?.(0, -1))?.format());

export const isoDateTimeString = (date: Date) =>
  dayjs(date)?.format(DATE_TIME_FORMAT?.ISO);

export const formatDateTime = (date?: Date | string, format?: string) =>
  dayjs(date)?.format(format);

export const formatTimeDifference = (isoDateString?: string | Date) => {
  const diffMinutes = dayjs()?.diff(dayjs(isoDateString), "minute");

  if (diffMinutes <= JUST_NOW) {
    return "Just now";
  }

  if (diffMinutes < MINUTES_IN_HOUR) {
    return formatTimeUnit(diffMinutes, "minute");
  }

  if (diffMinutes < MINUTES_IN_DAY) {
    return formatTimeUnit(diffMinutes, "hour", MINUTES_IN_HOUR);
  }
  if (diffMinutes < MINUTES_IN_MONTH) {
    return formatTimeUnit(diffMinutes, "day", MINUTES_IN_DAY);
  }
  if (diffMinutes < MINUTES_IN_YEAR) {
    return formatTimeUnit(diffMinutes, "month", MINUTES_IN_MONTH);
  }

  return formatTimeUnit(diffMinutes, "year", MINUTES_IN_YEAR);
};

const formatTimeUnit = (diff: number, unit: string, base: number = 1) => {
  const value = Math?.floor(diff / base);
  return `${value} ${unit}${value !== 1 ? "s" : ""} ago`;
};

export const formatRelativeDate = (isoDateString?: string | Date) => {
  const now = dayjs();
  const date = dayjs(isoDateString);
  const diffMinutes = now?.diff(date, "minute");

  const formattedTime = date?.format("hh:mm a");

  if (now?.isSame(date, "day")) {
    return `TODAY | ${formattedTime}`;
  }

  if (now?.subtract(1, "day")?.isSame(date, "day")) {
    return `YESTERDAY | ${formattedTime}`;
  }

  if (diffMinutes < MINUTES_IN_MONTH) {
    return `${date?.format("MMMM D")} | ${formattedTime}`;
  }

  if (diffMinutes < MINUTES_IN_YEAR) {
    return `${date?.format("MMMM YYYY")} | ${formattedTime}`;
  }

  return `${date?.format("YYYY")} | ${formattedTime}`;
};
