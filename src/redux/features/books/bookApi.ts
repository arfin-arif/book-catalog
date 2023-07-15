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
    singleBooks: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
      }),
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
} = bookApi;
