import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
    reducerPath: 'movieApi',
    refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3100/api/movie',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token;

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('x-auth-token', token)
            }

            return headers
        },
    }),
    endpoints: (builder) => ({
        getMovieDetails: builder.query({
            query: ({id, timestamp}) => {
                return {
                    url: '/',
                    params: {id, timestamp}
                }
            },
            transformResponse: (response) => {
                const genres = response.details.genres.map(g => g.name);
                const time = response.details.runtime;
                const hrs = Math.floor(time / 60);
                const mins = time - (hrs * 60);
                const runtime = hrs + 'hr ' + mins + 'min';
                const date = new Date(response.details.release_date);
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const month = months[date.getMonth()];
                const release_date = date.getDate() + ' ' + month + ' ' + date.getFullYear();
                const production_countries = response.details.production_countries.map(c => c.iso_3166_1.toLowerCase())

                return {
                    ...response.details, genres, runtime, release_date, production_countries
                }
            }
        }),
        getMovieCredits: builder.query({
            query: ({id, timestamp}) => {
                return {
                    url: '/credits',
                    params: {id, timestamp}
                }
            }
        }),
        getNowPlaying: builder.query({
            query: () => {
                return {
                    url: '/now_playing'
                }
            }
        }),
        getUpComing: builder.query({
            query: () => {
                return {
                    url: '/upcoming'
                }
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieDetailsQuery, useGetMovieCreditsQuery, useGetNowPlayingQuery, useGetUpComingQuery } = movieApi;