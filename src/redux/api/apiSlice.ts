import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BASE_URL = "https://book-catalog-theta.vercel.app";
// export const BASE_URL = "http://localhost:5000";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["reviews", "books", "editbooks"],
  endpoints: () => ({}),
});
