import { iMovie } from '@/components/Card/Card.props';
import { IPerson } from '@/types/types';
import { ReactNode } from 'react';

export interface PersonCardProps {
  person?: IPerson;
  children?: ReactNode;
}
