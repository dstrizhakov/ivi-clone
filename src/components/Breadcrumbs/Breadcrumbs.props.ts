import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type Breadcrumb = {
  name: string;
  path: string;
};

export interface BreadcrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  breadcrumbs: Breadcrumb[];
}
