import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './components/sign-in/sign-in';
import NotFound from './components/not-found/not-found';
import Home from './components/home/home';
import MyMovies from './components/my-movies/my-movies';
import SearchResults from './components/search-results/search-results';
import AccountSetting from './components/account-settings/account-settings';
import { useGetMovieGenresQuery } from './service/genres';

function App() {
  const { isLoading } = useGetMovieGenresQuery();

  if (isLoading) return (<></>);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/my-movies" element={<MyMovies />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/account-settings" element={<AccountSetting />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
