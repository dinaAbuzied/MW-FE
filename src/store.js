import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './features/movie/movieSlice';

export default configureStore({
    reducer: {
        movie: movieSlice
    },
})