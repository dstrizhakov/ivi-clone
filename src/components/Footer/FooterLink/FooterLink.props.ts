import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface FooterLinkProps {
  title: ReactNode;
  href?: string;
  icon: IconType;
  openModal?: () => void;
  modal?: boolean;
  isOpen?: boolean;
}
