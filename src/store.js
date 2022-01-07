import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchApi } from './service/search';
import { genresApi } from './service/genres';
import { languagesApi } from './service/languages';
import { movieApi } from './service/movie';
import { movieListApi } from './service/movie-list';
import { userApi, imagesApi } from './service/user-api';
import querySlice from './service/query';
import dialogSlice from './service/dialog';
import userSlice from './service/user-slice';

const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
        [languagesApi.reducerPath]: languagesApi.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [movieListApi.reducerPath]: movieListApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [imagesApi.reducerPath]: imagesApi.reducer,
        dialog: dialogSlice,
        query: querySlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(searchApi.middleware).concat(genresApi.middleware).concat(languagesApi.middleware)
            .concat(movieApi.middleware).concat(movieListApi.middleware).concat(userApi.middleware).concat(imagesApi.middleware),
})

setupListeners(store.dispatch)

export default store;