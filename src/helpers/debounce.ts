export const debounce = <Fn extends (...args: any[]) => any>(fn: Fn, ms: number) => {
  let timeout: NodeJS.Timeout;

  const debounced = (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };

  return debounced as (...args: Parameters<Fn>) => ReturnType<Fn>;
};
