import MovieTable from '../shared/movie-table';
import Pagination from '../shared/pagination';
import Header from '../shared/header/header';
import { useState } from 'react';
import { FiFilm } from 'react-icons/fi';
import {FaHeart, FaRegEye, FaGift, FaPlus} from 'react-icons/fa';

export default function MyMovies() {
    const [movies, setMovies] = useState([{
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
      }]);

      const [filtredMovies, setFilteredMovies] = useState(movies)

      const [selectedBtn, setSelectedBtn] = useState('all');

      const toggleList = (movieIndex, list) => {
        const tempMovies = [...movies];
        tempMovies[movieIndex][list] = !tempMovies[movieIndex][list];
        setMovies(tempMovies);
    }

    const selectList = (list) => {
        setSelectedBtn(list);
        if(list === 'all') {
            setFilteredMovies(movies);
            return;
        }
        const tempMovies = movies.filter(movie => movie[list]);
        setFilteredMovies(tempMovies);
    }

      return (
        <>
            <Header />
            <main className="p-4 max-w-screen-xl mx-auto">
                <div className="flex justify-between lg:justify-start">
                    <button onClick={()=> selectList('all')} className={`${selectedBtn === 'all' ? 'bg-main-light text-main-dark' : 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center text-lg`}>
                        <span className="flex items-center">
                            <FiFilm className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">All</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">3</span>
                    </button>
                    <button onClick={()=> selectList('fav')} className={`${selectedBtn === 'fav' ? 'bg-danger text-white': 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center lg:ml-5 text-lg`}>
                        <span className="flex items-center">
                            <FaHeart className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">Favourite</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">3</span>
                    </button>
                    <button onClick={()=> selectList('later')} className={`${selectedBtn === 'later' ? 'bg-warning text-white': 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center lg:ml-5 text-lg`}>
                        <span className="flex items-center">
                            <FaRegEye className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">Watch Later</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">3</span>
                    </button>
                    <button onClick={()=> selectList('wish')} className={`${selectedBtn === 'wish' ? 'bg-success text-white': 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center lg:ml-5 text-lg`}>
                        <span className="flex items-center">
                            <FaGift className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">Wish List</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">3</span>
                    </button>
                    <button onClick={()=> selectList('own')} className={`${selectedBtn === 'own' ? 'bg-primary text-white': 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center lg:ml-5 text-lg`}>
                        <span className="flex items-center">
                            <FaPlus className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">Own It</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">3</span>
                    </button>
                </div>
                <div className="bg-main-dark p-4 mt-4">
                    <MovieTable movies={filtredMovies} toggleList={toggleList} />
                    <Pagination/>
                </div>
            </main>
        </>
      )
}