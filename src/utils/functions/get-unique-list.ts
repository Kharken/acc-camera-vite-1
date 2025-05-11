export const getUniqueList = <T, K extends keyof T>(list: T[], key: K): T[] => {
  const result: T[] = [];
  const seen = new Set<T[K]>();

  for (const item of list) {
    const value = item[key];
    if (!seen.has(value)) {
      seen.add(value);
      result.push(item);
    }
  }

  return result;
};
