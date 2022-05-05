import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { movieApi } from './movie';

export const movieListApi = createApi({
    reducerPath: 'movieListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3100/api/movieList',
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
        toggleList: builder.mutation({
            query: ({ list, movieID }) => {
                return {
                    url: '/' + list,
                    method: 'PUT',
                    body: { movieID }
                }
            },
            async onQueryStarted({ list, movieID }, { dispatch, queryFulfilled }) {
                // `updateQueryData` requires the endpoint name and cache key arguments,
                // so it knows which piece of cache state to update
                const patchMovieDetails = dispatch(
                    movieApi.util.updateQueryData('getMovieDetails', movieID, draft => {
                        // The `draft` is Immer-wrapped and can be "mutated" like in createSlice
                        const index = draft.lists.indexOf(list)
                        if (index >= 0) {
                            draft.lists.splice(index, 1);
                        } else {
                            draft.lists.push(list);
                        }
                    })
                )
                const patchNowPlaying = dispatch(
                    movieApi.util.updateQueryData('getNowPlaying', undefined, draft => {
                        // The `draft` is Immer-wrapped and can be "mutated" like in createSlice
                        const movie = draft.results.find(item => item.id == movieID);
                        if (movie) {
                            const index = movie.lists.indexOf(list)
                            if (index >= 0) {
                                movie.lists.splice(index, 1);
                            } else {
                                movie.lists.push(list);
                            }
                        }
                    })
                )
                const patchUpComing = dispatch(
                    movieApi.util.updateQueryData('getUpComing', undefined, draft => {
                        // The `draft` is Immer-wrapped and can be "mutated" like in createSlice
                        const movie = draft.results.find(item => item.id == movieID);
                        if (movie) {
                            const index = movie.lists.indexOf(list)
                            if (index >= 0) {
                                movie.lists.splice(index, 1);
                            } else {
                                movie.lists.push(list);
                            }
                        }
                    })
                )
                try {
                    await queryFulfilled;
                } catch {
                    patchMovieDetails.undo();
                    patchNowPlaying.undo();
                    patchUpComing.undo();
                }
            }
        }),
    }),
})

export const { useToggleListMutation } = movieListApi;