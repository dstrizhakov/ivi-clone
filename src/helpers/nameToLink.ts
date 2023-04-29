export const nameToLink = (str: string) => {
  return str.toLowerCase().split(' ').join('-');
};
