import { IconType } from 'react-icons';

export interface LinkCardProps {
  icon: IconType;
  title: string;
  link: string;
  subtitle?: string;
  status?: 'red';
}
