export const nameToLink = (str: string): string => {
  return str.toLowerCase().split(' ').join('-');
};
