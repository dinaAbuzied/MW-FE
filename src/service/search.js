import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/search' }),
    endpoints: (builder) => ({
        getShortMovieList: builder.query({
            query: (query) => `short/?query=${query}`,
            transformResponse: (response) => {
                return response.results.map(movie => {
                    const year = new Date(movie.release_date).getFullYear();
                    return { ...movie, year }
                })
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShortMovieListQuery } = searchApi;