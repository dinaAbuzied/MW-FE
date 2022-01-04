import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchApi } from './service/search';
import { genresApi } from './service/genres';
import { languagesApi } from './service/languages';
import { movieApi } from './service/movie';
import querySlice from './service/query';
import dialogSlice from './service/dialog';
import userSlice from './service/user';

const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
        [languagesApi.reducerPath]: languagesApi.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
        dialog: dialogSlice,
        query: querySlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(searchApi.middleware).concat(genresApi.middleware).concat(languagesApi.middleware).concat(movieApi.middleware),
})

setupListeners(store.dispatch)

export default store;