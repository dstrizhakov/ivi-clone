import { IPerson } from '@/types/types';
import { ReactNode } from 'react';

export interface PersonCardProps {
  person?: IPerson;
  children?: ReactNode;
}
