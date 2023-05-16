import { useCallback, useLayoutEffect, useRef } from 'react';

export function useEvent<T extends (...args: unknown[]) => unknown>(fn: T) {
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback(
    (...args) => {
      return ref.current.apply(null, args);
    },
    [ref]
  );
}
