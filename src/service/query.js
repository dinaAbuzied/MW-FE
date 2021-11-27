import { createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
    name: 'query',
    initialState: {
        query: '',
        page: 1,
        filters: undefined
    },
    reducers: {
        newSearch: (state, action) => {
            state.query = action.payload;
            state.page = 1;
            state.filters = undefined;
        },
        updateFilters: (state, action) => {
            state.filters = action.payload
        },
        gotoPage: (state, action) => {
            state.page = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { newSearch, updateFilters, gotoPage } = querySlice.actions

export default querySlice.reducer