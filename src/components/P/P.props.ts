import { ReactNode } from 'react';

export interface PProps {
  size?: 'S' | 'M';
  color?: 'white' | 'gray-light' | 'gray';
  children: ReactNode;
}
