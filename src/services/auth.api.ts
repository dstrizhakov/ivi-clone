import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, setUser } from '@/store/reducers/auth.slice';

interface iAuth {
  email: string;
  password: string;
}

// prepareHeaders: (headers, { getState }) => {
//   const token = getState().auth.token;
//   if (token) {
//     headers.set('authorization', `Bearer ${token}`);
//   }
//   return headers;
// },

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.SERVER,
  }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (body: iAuth) => {
        return {
          url: '/registration',
          method: 'POST',
          body,
        };
      },
    }),
    login: build.mutation({
      query: (body: iAuth) => {
        return {
          url: '/auth/login',
          method: 'POST',
          body,
          credentials: 'include',
        };
      },
    }),
    logout: build.mutation({
      query: () => {
        return {
          url: '/user/logout',
          credentials: 'include',
        };
      },
    }),
    async onQueryStarted(args, { dispatch, queryFulfilled }) {
      try {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
      } catch (error) {
        console.log(error); ///
      }
    },
  }),
});

const reauthApi = async (args, api, extraOptions) => {
  let result = await authApi(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    const refreshResult = await authApi('/refresh', api, extraOptions); //refresh token endpoint
    console.log(refreshResult);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setUser({ ...refreshResult.data, user }));
      result = await authApi(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const { useLoginUserMutation, useLogoutUserMutation, useRegisterUserMutation } = reauthApi;
