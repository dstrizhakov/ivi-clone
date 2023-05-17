import { IMovie } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type QueryParams = {
  limit?: number;
  genre?: string;
  rating?: number;
  year?: string;
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
  tagTypes: ['Movie'],
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
      providesTags: result => ['Movie'],
    }),
    fetchOneMovie: build.query<IMovie, number>({
      query: (id) => ({
        url: `/movies/${id}`,
      }),
      providesTags: result => ['Movie'],
    }),
    addMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: '/movies',
        method: 'POST',
        body: movie
      }),
      invalidatesTags: ['Movie'],
    }),
    updateMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: `/movies/${movie.id}`,
        method: 'PUT',
        body: movie
      }),
      invalidatesTags: ['Movie'],
    }),
    deleteMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: `/movies/${movie.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Movie'],
    }),
  }),
});

export const { useFetchAllMoviesQuery, useFetchOneMovieQuery } = movieApi;
