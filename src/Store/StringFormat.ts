export function stringFormat(str: string): string {
  if (str.length > 30) {
    return str.slice(0, 5) + "..." + str.slice(-7);
  }
  return str;
}
