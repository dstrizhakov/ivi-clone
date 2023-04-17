import { iMovie } from '@/components/Card/Card.props';

export interface iMovieCard extends iMovie {
  year: string;
  rating: string;
}

export interface MovieCardProps {
  card: iMovieCard;
}
