import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hacker-news.firebaseio.com/v0'
  }),
  tagTypes: ['Post'],
  endpoints: build => ({
    fetchAllPosts: build.query<number[], number>({
      query: (limit: number = 100) => ({
        url: '/newstories.json',
        params: {
          _limit: limit
        },
        providesTags: ['Post']
      })
    }),
    fetchPost: build.query<IPost, number>({
      query: (id: number) => ({
        url: `/item/${id}.json`,
        providesTags: ['Post']
      })
    }),
  })
});


