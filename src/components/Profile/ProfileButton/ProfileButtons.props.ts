import { IconType } from 'react-icons';
import { ReactNode } from 'react';

export enum iCardEnum {
  square_icon = 'square_icon',
  rect_icon = 'rect_icon',
  rect_icon_light = 'rect_icon_light',
  rect_icon_purple = 'rect_icon_purple',
  rect_text = 'rect_text',
}

export interface iPB {
  type: iCardEnum;
}

export interface ICardButtons extends iPB {
  icon?: IconType;
  children?: ReactNode;
  onClick?: () => void;
}
