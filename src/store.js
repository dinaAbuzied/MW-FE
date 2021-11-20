import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchApi } from './service/search';
import { genresApi } from './service/genres';
import movieSlice from './features/movie/movieSlice';

const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
        movie: movieSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(searchApi.middleware),
})

setupListeners(store.dispatch)

export default store;