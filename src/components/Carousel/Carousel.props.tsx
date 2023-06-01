import { ReactNode } from 'react';
import 'i18next';

export interface CarouselProps {
  title?: string;
  route?: string;
  showAll?: boolean;
  children: ReactNode;
  settings?: object;
}
