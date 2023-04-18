import { ReactNode } from 'react';

export interface FSMProps {
  children: ReactNode;
  isOpen: boolean;
  closeSearch: () => void;
}
