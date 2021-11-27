import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { Suspense } from 'react';
import SignIn from './components/sign-in/sign-in';
import NotFound from './components/not-found/not-found';
import Home from './components/home/home';
import MyMovies from './components/my-movies/my-movies';
import AccountSetting from './components/account-settings/account-settings';
import MovieDetails from './components/shared/movie-details'
import { useGetMovieGenresQuery } from './service/genres';

const SearchResults = React.lazy(() => import('./components/search-results/search-results'));

function App() {
  const { isLoading } = useGetMovieGenresQuery();

  if (isLoading) return (<></>);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={
            <Suspense fallback={<div>Loading...</div>}>
              <SearchResults />
            </Suspense>
          }>
            <Route path=":phrase" element={
              <SearchResults />
            } />
          </Route>
          <Route path="/my-movies" element={<Suspense fallback={<div>Loading...</div>}>
            <MyMovies />
          </Suspense>} />
          <Route path="/account-settings" element={<Suspense fallback={<div>Loading...</div>}>
            <AccountSetting />
          </Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
      <MovieDetails />
    </>
  );
}

export default App;
