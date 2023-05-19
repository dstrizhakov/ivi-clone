import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPerson } from '@/types/types';

export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
  tagTypes: ['Person'],
  endpoints: (build) => ({
    fetchAllPersons: build.query<IPerson[]>({
      query: () => ({
        url: '/persons',
      }),
      providesTags: (result) => ['Person'],
    }),
    fetchOnePerson: build.query<IPerson, number | string>({
      query: (id) => ({
        url: `/persons/${id}`,
      }),
      providesTags: (result) => ['Person'],
    }),
  }),
});

export const { useFetchAllPersonsQuery, useFetchOnePersonQuery } = personApi;
