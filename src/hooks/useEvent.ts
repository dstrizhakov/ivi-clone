import { useCallback, useLayoutEffect, useRef } from 'react';

export function useEvent<T extends (...args: any[]) => any>(fn: T) {
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback(
    (...args: Parameters<T>) => {
      return ref.current.apply(null, args);
    },
    [ref]
  );
}
