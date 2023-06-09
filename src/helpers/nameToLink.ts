export const nameToLink = (str: string): string => {
  return str.toLowerCase().split(' ').join('-');
};

export const reverseNameToLink = (str: string): string => {
  return str
    .split('-')
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(' ');
};
