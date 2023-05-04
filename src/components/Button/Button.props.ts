import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export enum BtnA {
  rectangle = 'rectangle',
  square = 'square',
  circle = 'circle',
  red = 'red',
  transparent = 'transparent',
}

export enum BtnS {
  S = 'S',
  M = 'M',
  L = 'L',
}

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  appearance?: BtnA; //'rectangle' | 'square' | 'circle' | 'red' | 'transparent';
  size?: BtnS; //'S' | 'M' | 'L'
}
