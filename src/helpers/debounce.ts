export const debounce = <Fn extends (...args: unknown[]) => unknown>(fn: Fn, ms: number) => {
  let timeout: NodeJS.Timeout;

  const debounced = (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };

  return debounced as (...args) => ReturnType<Fn>;
};
