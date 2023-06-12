import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IComment } from '@/types/types';

interface fetchedComment {
  id: number;
  commentsData: IComment[];
}

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001' + '/comments',
  }),
  tagTypes: ['Comments'],
  endpoints: (build) => ({
    fetchComments: build.query<fetchedComment, string | number>({
      query: ({ id }) => ({
        url: `/${id}`,
      }),
      providesTags: (result) =>
        result?.length
          ? [
              ...result.map(({ id }) => ({ type: 'Comments', id })),
              { type: 'Comments', id: 'LIST' },
            ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
    createComments: build.mutation<fetchedComment, fetchedComment>({
      query: ({ comment, id }) => ({
        url: `/${id}`,
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
    addComment: build.mutation<fetchedComment, fetchedComment>({
      query: ({ comment, id }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: comment,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
    deleteComment: build.mutation<fetchedComment, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchCommentsQuery,
  useCreateCommentsMutation,
  useDeleteCommentMutation,
  useAddCommentMutation,
} = commentsApi;
