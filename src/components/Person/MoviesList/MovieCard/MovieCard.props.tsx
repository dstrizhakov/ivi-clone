import { IMovie } from '@/types/types';

export interface iMovieCard extends IMovie {
  year: string;
  rating: string;
}

export interface MovieCardProps {
  card: IMovie;
}
