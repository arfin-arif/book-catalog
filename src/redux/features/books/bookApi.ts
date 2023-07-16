// bookApi.ts

import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ searchTerm }) => ({
        url: "/books",
        params: {
          searchTerm,
        },
      }),
    }),
    postEditBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["editbooks"],
    }),
    singleBooks: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
      }),
    }),
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    getReviews: builder.query({
      query: (id) => ({
        url: `/reviews/${id}`,
      }),
      providesTags: ["reviews"],
    }),
    postReviews: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBooksQuery,
  useGetReviewsQuery,
  usePostReviewsMutation,
  usePostBookMutation,
  usePostEditBookMutation,
  useDeleteBookMutation,
} = bookApi;
