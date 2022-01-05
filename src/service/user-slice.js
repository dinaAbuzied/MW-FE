import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false
    },
    reducers: {
        login: (state) => {
            state.authenticated = true
        },
        logout: (state) => {
            state.authenticated = false;
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer