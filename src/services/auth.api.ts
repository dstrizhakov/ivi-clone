import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface iLogin {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7000',
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body: iLogin) => {
        return {
          url: '/user/signin',
          method: 'post',
          body,
        };
      },
    }),
    registerUser: build.mutation({
      query: (body: iLogin) => {
        return {
          url: '/user/signup',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
