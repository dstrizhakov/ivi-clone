import { MovieInfo } from '@/components/Movie/Movie';
import { movies } from '@/mock/movies';
import { IMovie } from '@/types/types';
import { useRouter } from 'next/router';

const Movie = () => {
  const router = useRouter();

  return (
    <>
      {movies.map((m: IMovie) => {
        if (router.asPath === `/movie/${m.id}`) return <MovieInfo movie={m} />;
      })}
    </>
  );
};

export default Movie;
