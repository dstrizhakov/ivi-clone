import { useCallback, useEffect, useRef } from 'react';

export function useEvent<T extends (...args: any[]) => any>(fn: T) {
  const ref = useRef(fn);

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback(
    (...args: any[]) => {
      return ref.current.apply(null, args);
    },
    [ref]
  );
}
