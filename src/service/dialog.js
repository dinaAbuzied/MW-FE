import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        movieDetails: {
            isOpen: false,
            params: {},
        }
    },
    reducers: {
        openDialog(state, action) {
            const { params, type } = action.payload;
            state[type].isOpen = true;
            state[type].params = params;
            console.log(state);
        },
        closeDialog(state, action) {
            const { type } = action.payload;
            state[type].isOpen = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { openDialog, closeDialog } = dialogSlice.actions

export default dialogSlice.reducer