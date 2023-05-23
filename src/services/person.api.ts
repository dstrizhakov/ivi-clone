import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPersonOld } from '@/types/types';

export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/persons',
  }),
  tagTypes: ['Person'],
  endpoints: (build) => ({
    fetchAllPersons: build.query<IPersonOld[]>({
      query: () => ({
        url: '/',
      }),
      providesTags: (result) => ['Person'],
    }),
    fetchOnePerson: build.query<IPersonOld, number | string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: (result) => ['Person'],
    }),
  }),
});

export const { useFetchAllPersonsQuery, useFetchOnePersonQuery } = personApi;
