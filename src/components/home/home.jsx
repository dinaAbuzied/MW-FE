import MovieList from "./movie-list";
import Header from '../shared/header/header';

export default function Home () {
    const movieList = [{
        name: 'The Lord of the Rings: Fellowship Of Ring',
        year: 2001,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: true,
        later: false,
        wish: false,
        own: true
      }, {
        name: 'The Lord of the Rings: The Two Towers',
        year: 2002,
        poster: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: false,
        later: true,
        wish: false,
        own: false
      }, {
        name: 'The Lord of the Rings: Return Of The King',
        year: 2003,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDE5MTk0M15BMl5BanBnXkFtZTcwMzA3MTk2Mw@@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: false,
        later: false,
        wish: true,
        own: false
      }, {
        name: 'The Lord of the Rings: Fellowship Of Ring',
        year: 2001,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: true,
        later: false,
        wish: false,
        own: true
      }, {
        name: 'The Lord of the Rings: The Two Towers',
        year: 2002,
        poster: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: false,
        later: true,
        wish: false,
        own: false
      }, {
        name: 'The Lord of the Rings: Return Of The King',
        year: 2003,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDE5MTk0M15BMl5BanBnXkFtZTcwMzA3MTk2Mw@@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: false,
        later: false,
        wish: true,
        own: false
      }, {
        name: 'The Lord of the Rings: Fellowship Of Ring',
        year: 2001,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: true,
        later: false,
        wish: false,
        own: true
      }, {
        name: 'The Lord of the Rings: The Two Towers',
        year: 2002,
        poster: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: false,
        later: true,
        wish: false,
        own: false
      }, {
        name: 'The Lord of the Rings: Return Of The King',
        year: 2003,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDE5MTk0M15BMl5BanBnXkFtZTcwMzA3MTk2Mw@@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: false,
        later: false,
        wish: true,
        own: false
      }, {
        name: 'The Lord of the Rings: Fellowship Of Ring',
        year: 2001,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
        genres: ['Action','Adventure','Drama','Fantasy'],
        fav: true,
        later: false,
        wish: false,
        own: true
      }]
    return(
        <>
        <Header/>
        <main className="p-4 flex justify-center">
            <MovieList title="Now Playing" list={movieList} />
        </main>
        </>
    )
}