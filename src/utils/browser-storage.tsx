export const getDataFromLocalStorage = (storageKey: any) => {
  if (typeof window === "undefined") return null;
  const data = JSON.parse(localStorage?.getItem(storageKey) as string) || null;
  return data;
};

export const saveDataToLocalStorage = (storageKey: any, dataToSave: any) => {
  if (typeof window === "undefined") return null;
  const data = localStorage?.setItem(storageKey, JSON.stringify(dataToSave));
  return data;
};

export const removeDataFromLocalStorage = (storageKey: any) => {
  if (typeof window === "undefined") return null;
  const data = localStorage?.removeItem(storageKey);
  return data;
};
