import { useMemo } from 'react';
import { debounce } from '@/helpers/debounce';
import { useEvent } from '@/hooks/useEvent';

export function useDebounce<Fn extends (...args: any[]) => any>(fn: Fn, ms: number) {
  const memoizedFn = useEvent(fn);
  return useMemo(
    () =>
      debounce((...args: Parameters<Fn>) => {
        memoizedFn(...args);
      }, ms),
    [memoizedFn, ms]
  );
}
