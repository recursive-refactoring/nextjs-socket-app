import { ARRAY_INDEX } from "@/constants/array";

export const truncateText = (text = "---", sliceLimit = 20) => {
  return text?.length > sliceLimit
    ? `${text?.slice?.(0, sliceLimit)} ...`
    : text;
};

export const fullName = (firstName?: any, lastName?: any) => {
  if (!!!firstName && !!!lastName) return "None";
  return `${firstName ?? ""} ${lastName ?? ""}`;
};

export const convertCurrentCaseToTitleCase = (
  str: any,
  split = "-",
): string => {
  return str
    ?.split?.(split)
    ?.map?.(
      (word: string) =>
        word?.charAt?.(ARRAY_INDEX?.ZERO)?.toUpperCase?.() +
        word?.slice?.(ARRAY_INDEX?.ONE),
    )
    ?.join?.(" ");
};
