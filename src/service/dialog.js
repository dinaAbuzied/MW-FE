import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        movieDetails: {
            isOpen: false,
            params: {},
        }
        // isOpen: false,
        // params: {},
        // name: 'The Lord of the Rings: Return Of The King',
        // year: '15 September 2003',
        // poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDE5MTk0M15BMl5BanBnXkFtZTcwMzA3MTk2Mw@@._V1_.jpg',
        // genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
        // duration: '2hr 7min',
        // desc: 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
        // fav: false,
        // later: false,
        // wish: false,
        // own: false
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