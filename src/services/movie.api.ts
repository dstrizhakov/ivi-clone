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
    credentials: 'same-origin',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
      return headers;
    },
  }),
  tagTypes: ['Movie'],
  endpoints: (build) => ({
    fetchOneFilm: build.query<IMovie, string | number>({
      query: ({ id }) => ({
        url: `/${id}`,
      }),
      providesTags: (result) => ['Movie'],
    }),
    fetchAllFilms: build.query<IMovie[], unknown>({
      query: ({ genres, limit = 15 }) => ({
        url: '/',
        params: {
          genres: genres,
          limit: limit,
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
          limit: limit,
          page: page,
          directors: persons,
          actors: actors,
          countries: countries,
          rates_amount: rates_amount,
          genres: genres,
          rating: rating,
          year: years,
        },
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
          limit: limit,
          page: page,
          directors: persons,
          actors: actors,
          countries: countries,
          rates_amount: rates_amount,
          genres: genres,
          rating: rating,
          year: years,
        },
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
    addOneFilm: build.mutation<IMovie, IMovie>({
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
    deleteOneFilm: build.mutation<IMovie, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Movie'],
    }),
  }),
});

export const {
  useFetchOneFilmQuery,
  useFetchAllFilmsQuery,
  useFetchAllMoviesQuery,
  useFetchAllSeriesQuery,
  useFetchAllCartoonsQuery,
  useDeleteOneFilmMutation,
  useAddOneFilmMutation,
} = movieApi;
