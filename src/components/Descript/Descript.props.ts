import { ReactNode } from "react";

export interface DescriptProps {
  heading?: string;
  appearance?: 'rectangle' | 'square' | 'circle' | 'red' | 'transparent';
  children: ReactNode;
}
