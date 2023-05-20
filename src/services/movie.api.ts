import { IMovie } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type QueryParams = {
  limit?: number;
  genres?: string[];
  persons?: string[];
  actors?: string[];
  countries?: string[];
  rating?: number;
  page?: number;
  rates_amount?: number;
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER + '/film' }),
  tagTypes: ['Movie'],
  endpoints: (build) => ({
    fetchAllMovies: build.query<IMovie[], QueryParams>({
      query: ({
        limit = 100,
        page = 1,
        persons,
        actors,
        countries,
        rating,
        rates_amount,
        genres,
        years,
      }) => ({
        url: '/movies',
        params: {
          _limit: limit,
          _page: page,
          _directors: persons,
          _actors: actors,
          _countries: countries,
          _rates_amount: rates_amount,
          _genres: genres,
          _rating: rating,
          _year: years,
        },
      }),
      providesTags: (result) => ['Movie'],
    }),
    fetchOneMovie: build.query<IMovie, string | number>({
      query: (id) => ({
        url: `/movies/${id}`,
      }),
      providesTags: (result) => ['Movie'],
    }),
    addOneMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: '/movies',
        method: 'POST',
        body: movie,
      }),
      invalidatesTags: ['Movie'],
    }),
    updateMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: `/movies/${movie.id}`,
        method: 'PUT',
        body: movie,
      }),
      invalidatesTags: ['Movie'],
    }),
    deleteOneMovie: build.mutation<IMovie, number>({
      query: (id) => ({
        url: `/movies/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Movie'],
    }),
  }),
});

export const {
  useFetchAllMoviesQuery,
  useFetchOneMovieQuery,
  useDeleteOneMovieMutation,
  useAddOneMovieMutation,
} = movieApi;
