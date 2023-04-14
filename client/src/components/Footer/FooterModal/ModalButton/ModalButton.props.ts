import { ReactNode } from 'react';

export interface ModalButtonProps {
  children: ReactNode | ReactNode[];
  title: ReactNode;
  openModal: () => void;
  isOpen: boolean;
}
