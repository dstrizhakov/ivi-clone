import { useEffect } from 'react';

export function usePreventScrollFixed(openState) {
  useEffect(() => {
    if (openState) {
      document.getElementsByClassName('wrapper')[0].style.position = 'fixed';
      document.body.style.overflow = 'hidden';
    } else {
      document.getElementsByClassName('wrapper')[0].removeAttribute('style');
      document.body.removeAttribute('style');
    }
  }, [openState]);
}
