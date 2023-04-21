import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7000',
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: '/user/signin',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
