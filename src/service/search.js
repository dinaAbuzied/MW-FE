import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { genres } from './genres';

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
                    const list = movie.genre_ids.map(genre => genres.find(d => d.id === genre));
                    return { ...movie, year, genres: list }
                })
            }
        }),
        getLongMovieList: builder.query({
            query: (params) => {
                // `?query=${params.query}&page=${params.page}`
                const { query, page, filters } = params;
                return {
                    url: '/',
                    params: { query, page, filters }
                }
            },
            transformResponse: (response) => {
                return {
                    ...response, results: response.results.map(movie => {
                        const year = new Date(movie.release_date).getFullYear();
                        const list = movie.genre_ids.map(genre => genres.find(d => d.id === genre));
                        return { ...movie, year, genres: list }
                    }),
                    pageSize: 20
                }
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShortMovieListQuery, useGetLongMovieListQuery } = searchApi;