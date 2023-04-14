import { ReactNode } from 'react';

export interface FooterLinkProps {
  children: ReactNode | ReactNode[];
  title: ReactNode;
  href: string;
}
