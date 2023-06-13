export const writeDate = (date: number): string => {//DD.MM.YYYY
  const now: Date = new Date(date);
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
};
