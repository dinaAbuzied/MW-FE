import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const languagesApi = createApi({
    reducerPath: 'languagesApi',
    refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({ baseUrl: ' https://movie-world-091085.herokuapp.com/api/languages' }),
    endpoints: (builder) => ({
        getLanguages: builder.query({
            query: () => ``,
            transformResponse: (respose) => {
                return respose.languages;
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLanguagesQuery } = languagesApi;