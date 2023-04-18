import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'S' | 'M' | 'L';
  color?: 'white' | 'gray-light' | 'gray';
  children: ReactNode;
}
