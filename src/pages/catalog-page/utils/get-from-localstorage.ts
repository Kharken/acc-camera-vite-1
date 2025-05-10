
export const getFromLocalStorage = <T>(key: string): T[] => {

  const getFromStorageResult = localStorage.getItem(key);
  return getFromStorageResult !== null ? JSON.parse(getFromStorageResult) as T[] : [];
};
