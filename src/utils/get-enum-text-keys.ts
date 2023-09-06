
export function getEnumTextKeys<T extends Record<string, string | number>>(enumObj: T): string[] {
  return Object.keys(enumObj).filter((key) => isNaN(Number(key)));
}
