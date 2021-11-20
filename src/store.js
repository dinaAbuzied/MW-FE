import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchApi } from './service/search';
import movieSlice from './features/movie/movieSlice';

const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
        movie: movieSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(searchApi.middleware),
})

setupListeners(store.dispatch)

export default store;