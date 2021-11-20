import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const genres = [];

// Define a service using a base URL and expected endpoints
export const genresApi = createApi({
    reducerPath: 'genresApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/genres' }),
    endpoints: (builder) => ({
        getMovieGenres: builder.query({
            query: () => ``,
            transformResponse: (respose) => {
                genres.push(...respose.genres);
                return respose;
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieGenresQuery } = genresApi;