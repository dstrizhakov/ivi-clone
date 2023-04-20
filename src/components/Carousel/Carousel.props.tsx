import { ReactNode } from 'react';

export interface CarouselProps {
  title?: string;
  route?: string;
  showAll?: boolean;
  children: ReactNode;
  settings?: object;
}
