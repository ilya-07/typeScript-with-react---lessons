import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axiosQuery";
import { IGlobalFeed } from "./dto/dto";
export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (build) => ({
    getGlobalFeed: build.query<IGlobalFeed, any>({
      query: () => ({
        url: "/articles",
        method: "get",
      }),
    }),
  }),
});
export const { useGetGlobalFeedQuery } = feedApi;
