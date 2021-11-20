import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { genres } from './genres';

// Define a service using a base URL and expected endpoints
export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/search' }),
    endpoints: (builder) => ({
        getShortMovieList: builder.query({
            query: (query) => `short/?query=${query}&language=en-US&include_adult=false`,
            transformResponse: (response) => {
                return response.results.map(movie => {
                    const year = new Date(movie.release_date).getFullYear();
                    const list = movie.genre_ids.map(genre => genres.find(d => d.id === genre));
                    return { ...movie, year, genres: list }
                })
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShortMovieListQuery } = searchApi;