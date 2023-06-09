import { useCallback, useEffect, useRef } from 'react';

export function useEvent<T extends (...args: unknown[]) => unknown>(fn: T) {
  const ref = useRef(fn);

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback(
    (...args) => {
      return ref.current.apply(null, args);
    },
    [ref]
  );
}
