import { useMemo } from 'react';
import { debounce } from '@/helpers/debounce';
import { useEvent } from '@/hooks/useEvent';

export function useDebounce<Fn extends (...args: unknown[]) => unknown>(fn: Fn, ms: number) {
  const memoizedFn = useEvent(fn);
  return useMemo(
    () =>
      debounce((...args) => {
        memoizedFn(...args);
      }, ms),
    [memoizedFn, ms]
  );
}
