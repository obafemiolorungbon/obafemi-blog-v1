import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hashnodeApi = createApi({
  reducerPath: 'homepage',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hashnode.com/' }),
  endpoints: (builder) => ({
    getPostsByUser: builder.query({
      query: (query) => ({
        url: '',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: query
      }),
      transformResponse: (response) => response?.data.user.publication.posts
    })
  })
});

export const { useGetPostsByUserQuery } = hashnodeApi;

export async function postGraphQL(query, variables) {
  try {
    const data = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    });
    const serialisedData = await data.json();
    const {
      data: {
        user: {
          publication: { posts: post }
        }
      }
    } = serialisedData;
    return post;
  } catch (error) {
    console.log(error);
  }
}
