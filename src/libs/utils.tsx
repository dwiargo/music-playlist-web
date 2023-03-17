export const stringTruncate = (str: string, maxLength: number) => {
  return str.length > maxLength
    ? String(str)
        .slice(0, maxLength - 3)
        .padEnd(maxLength, '...')
    : str
}