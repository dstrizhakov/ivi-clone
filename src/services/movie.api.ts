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
  tagTypes: ['Movies'],
  endpoints: (build) => ({
    fetchOneFilm: build.query<IMovie, string | number>({
      query: ({ id }) => ({
        url: `/${id}`,
      }),
      providesTags: (result) =>
        result?.length
          ? [...result.map(({ id }) => ({ type: 'Movies', id })), { type: 'Movies', id: 'LIST' }]
          : [{ type: 'Movies', id: 'LIST' }],
    }),
    fetchAllFilms: build.query<IMovie[], unknown>({
      query: ({ genres, limit = 15, page }) => ({
        url: '/',
        params: {
          genres: genres,
          _limit: limit,
          _page: page,
        },
      }),
      providesTags: (result) =>
        result?.length
          ? [...result.map(({ id }) => ({ type: 'Movies', id })), { type: 'Movies', id: 'LIST' }]
          : [{ type: 'Movies', id: 'LIST' }],
    }),
    addOneFilm: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: '/',
        method: 'POST',
        body: movie,
      }),
      invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
    }),
    updateMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: `/${movie.id}`,
        method: 'PUT',
        body: movie,
      }),
      invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
    }),
    deleteOneFilm: build.mutation<IMovie, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchOneFilmQuery,
  useFetchAllFilmsQuery,
  useDeleteOneFilmMutation,
  useAddOneFilmMutation,
} = movieApi;
