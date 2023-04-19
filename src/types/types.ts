// export interface ILink {
//   name: string;
//   link: string;

import { iMovieCard } from '@/components/Person/MoviesList/MovieCard/MovieCard.props';

// }
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
