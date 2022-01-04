import MovieList from "./movie-list";
import Header from '../shared/header/header';
import { useGetNowPlayingQuery } from '../../service/movie';

export default function Home () {
  const {isFetching, error, data: nowPlaying, isUninitialized} = useGetNowPlayingQuery();

    return(
        <>
        <Header/>
        <main className="p-4 flex justify-center">
            {
              isFetching || isUninitialized ? (<></>) : (
                <MovieList title="Now Playing" list={nowPlaying.results} />
              )
            }
        </main>
        </>
    )
}