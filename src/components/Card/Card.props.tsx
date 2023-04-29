import { IMovie } from '@/types/types';

export interface CardProps {
  card: IMovie;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
}
