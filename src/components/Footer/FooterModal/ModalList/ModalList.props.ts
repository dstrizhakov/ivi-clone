import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface ModalListProps {
  children?: ReactNode | ReactNode[];
  title: ReactNode | ReactNode[];
  icon?: IconType;
  isFilms?: boolean;
}
