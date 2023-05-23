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
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001' + '/film',
  }),
  tagTypes: ['Movie'],
  endpoints: (build) => ({
    fetchAllFilms: build.query<IMovie[], unknown>({
      query: ({ genres, limit = 15 }) => ({
        url: '/',
        params: {
          _genres: genres,
          _limit: limit,
        },
        providesTags: (result) => ['Movie'],
      }),
    }),
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
    fetchAllCartoons: build.query<IMovie[], QueryParams>({
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
        url: '/cartoons',
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
    fetchOneCartoon: build.query<IMovie, string | number>({
      query: (id) => ({
        url: `/cartoons/${id}`,
      }),
      providesTags: (result) => ['Movie'],
    }),
    fetchAllSeries: build.query<IMovie[], QueryParams>({
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
        url: '/series',
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
    fetchOneSeries: build.query<IMovie, string | number>({
      query: (id) => ({
        url: `/movies/${id}`,
      }),
      providesTags: (result) => ['Movie'],
    }),
    addOneMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: '/',
        method: 'POST',
        body: movie,
      }),
      invalidatesTags: ['Movie'],
    }),
    updateMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: `/${movie.id}`,
        method: 'PUT',
        body: movie,
      }),
      invalidatesTags: ['Movie'],
    }),
    deleteOneMovie: build.mutation<IMovie, number>({
      query: (id) => ({
        url: `/${id}`,
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
