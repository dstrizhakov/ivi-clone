import { useEffect } from 'react';

export function usePreventScroll(openState) {
  useEffect(() => {
    openState
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [openState]);
}
