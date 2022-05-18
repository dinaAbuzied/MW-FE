import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const genres = [];

// Define a service using a base URL and expected endpoints
export const genresApi = createApi({
    reducerPath: 'genresApi',
    refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({ baseUrl: 'https://movie-world-091085.herokuapp.com/api/genres' }),
    endpoints: (builder) => ({
        getMovieGenres: builder.query({
            query: () => ``,
            transformResponse: (respose) => {
                genres.push(...respose.genres);
                return respose.genres;
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieGenresQuery } = genresApi;