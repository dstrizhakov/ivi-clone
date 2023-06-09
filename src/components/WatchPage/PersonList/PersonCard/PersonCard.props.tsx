import { IPersonOld } from '@/types/types';
import { ReactNode } from 'react';

export interface PersonCardProps {
  person?: IPersonOld;
  children?: ReactNode;
}
