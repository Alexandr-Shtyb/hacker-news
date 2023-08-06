import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IComment} from "../models/IComment";

export const commentAPI = createApi({
  reducerPath: 'commentAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hacker-news.firebaseio.com/v0'
  }),
  tagTypes: ['Comment'],
  endpoints: build => ({
    fetchRootComments: build.query<IComment, number>({
      query: (id: number) => ({
        url: `/item/${id}.json`,
        providesTags: ['Comment'],
      })
    }),
  })
})
