import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/user' }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => {
                return {
                    url: '/register',
                    method: 'POST',
                    body
                }
            },
            transformResponse: (respose) => {
                console.log(respose);
                return respose;
            }
        }),
        login: builder.mutation({
            query: (body) => {
                return {
                    url: '/login',
                    method: 'POST',
                    body
                }
            },
            transformResponse: (respose) => {
                console.log(respose);
                return respose;
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useLoginMutation } = userApi;