import { iMovieCard } from '@/components/Person/MoviesList/MovieCard/MovieCard.props';
export interface ILink {
  title: string;
  link: string;
}
export interface IPerson {
  url: string;
  name: string;
  enName: string;
  descr: string;
  films: iMovieCard[];
}
export interface IMovie {
  id: number;
  name: string;
  enName: string;
  description: string;
  trailer: string;
  year: string;
  countries: string | string[];
  rating: string;
  genres: string | string[];
  duration: string;
  persons: IPerson[];
}
