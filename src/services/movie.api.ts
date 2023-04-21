import { IMovie } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export type QueryParams = { limit?: number; genre?: string; rating?: number; year?: string };

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<IMovie[], QueryParams>({
      query: ({ limit, genre, rating, year }) => ({
        url: '/movies',
        params: {
          _limit: limit,
          _genre: genre,
          _rating: rating,
          _year: year,
        },
      }),
    }),
    fetchOneMovie: build.query<IMovie, number>({
      query: (id) => ({
        url: `/movies/${id}`,
      }),
    }),
  }),
});

export const {} = movieAPI;
