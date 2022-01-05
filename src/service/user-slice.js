import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false,
        user: false
    },
    reducers: {
        login: (state, action) => {
            state.authenticated = true
            state.user = action.payload;
        },
        logout: (state) => {
            state.authenticated = false;
            state.user = false;
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer