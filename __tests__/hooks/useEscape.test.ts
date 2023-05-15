import { renderHook } from '@testing-library/react';
import { useEscapeKey } from '../../src/hooks/useEscapeKey';

describe('useEscape', () => {
  test('escape', () => {
    const { result } = renderHook(() => useEscapeKey(() => console.log('closed')));
    expect(result.current).toBe(undefined);
  });
});
