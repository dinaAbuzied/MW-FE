import MovieList from "./movie-list";
import Header from '../shared/header/header';
import { useGetNowPlayingQuery, useGetUpComingQuery } from '../../service/movie';

export default function Home () {
  const {isFetching: npIsFetching, error: npError, data: nowPlaying, isUninitialized: npIsUninitialized} = useGetNowPlayingQuery();
  const {isFetching: ucIsFetching, error: ucError, data: upcoming, isUninitialized: ucIsUninitialized} = useGetUpComingQuery();

    return(
        <>
        <Header/>
        <main className="p-4 flex justify-center flex-wrap">
            {
              npIsFetching || npIsUninitialized ? (<></>) : (
                <MovieList title="Now Playing" list={nowPlaying.results} />
              )
            }
            {
              ucIsFetching || ucIsUninitialized ? (<></>) : (
                <MovieList title="Up Coming" list={upcoming.results} />
              )
            }
        </main>
        </>
    )
}