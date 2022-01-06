import { createSlice } from '@reduxjs/toolkit';
import { userApi, imagesApi } from './user-api';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false,
        user: false,
        token: false
    },
    reducers: {
        login: (state) => {
            state.authenticated = true;
        },
        logout: (state) => {
            state.authenticated = false;
            state.user = false;
            state.token = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.login.matchFulfilled, (state, { meta, payload }) => {
                const headers = meta.baseQueryMeta.response.headers;
                state.token = headers.get('x-auth-token');
                state.user = payload;
                state.authenticated = true;
            })
            .addMatcher(userApi.endpoints.register.matchFulfilled, (state, { meta, payload }) => {
                const headers = meta.baseQueryMeta.response.headers;
                state.token = headers.get('x-auth-token');
                state.user = payload;
                state.authenticated = true;
            })
            .addMatcher(userApi.endpoints.update.matchFulfilled, (state, { payload }) => {
                state.user = payload;
                state.authenticated = true;
            })
            .addMatcher(imagesApi.endpoints.profile.matchFulfilled, (state, { payload }) => {
                state.user.avatar_url = payload.imageUrl;
            })
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer