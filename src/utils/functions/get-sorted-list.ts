export const getSortedList = <T>(list: T[], compareFn: (a: T, b: T) => number): T[] => [...list].sort(compareFn);
