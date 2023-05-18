import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPerson } from '@/types/types';
import { nameToLink } from '@/helpers/nameToLink';

export const personApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
  tagTypes: ['Person'],
  endpoints: (build) => ({
    fetchAllPersons: build.query<IPerson[]>({
      query: () => ({
        url: '/persons',
      }),
      providesTags: (result) => ['Person'],
    }),
    fetchOnePerson: build.query<IPerson, string>({
      query: (name) => ({
        url: `/persons`,
        params: {
          _name: nameToLink(name),
        }
      }),
      providesTags: (result) => ['Person'],
    }),
  }),
});

export const {
  useFetchAllPersonsQuery,
  useFetchOnePersonQuery,
} = personApi;
