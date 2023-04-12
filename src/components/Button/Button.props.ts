import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  appearance?: 'rectangle' | 'square' | 'circle' | 'red';
  size?: 'S' | 'M' | 'L';
}
