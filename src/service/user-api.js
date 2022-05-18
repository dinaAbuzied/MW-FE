import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://movie-world-091085.herokuapp.com/api/user',
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
        register: builder.mutation({
            query: (body) => {
                return {
                    url: '/register',
                    method: 'POST',
                    body
                }
            }
        }),
        login: builder.mutation({
            query: (body) => {
                return {
                    url: '/login',
                    method: 'POST',
                    body
                }
            }
        }),
        update: builder.mutation({
            query: ({ id, values }) => {
                console.log(values);
                return {
                    url: '/' + id,
                    method: 'PUT',
                    body: values
                }
            }
        }),
    }),
})

export const imagesApi = createApi({
    reducerPath: 'imagesApi',
    refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://movie-world-091085.herokuapp.com/api/images',
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
        profile: builder.mutation({
            query: ({ file, id }) => {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('userID', id);
                return {
                    url: '/profile',
                    method: 'POST',
                    body: formData
                }
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useLoginMutation, useUpdateMutation } = userApi;
export const { useProfileMutation } = imagesApi;