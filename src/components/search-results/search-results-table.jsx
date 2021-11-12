import { useState } from 'react';
import { FaFilter} from 'react-icons/fa';
import Pagination from '../shared/pagination';
import FilterTable from './filter-table';
import useToggle from '../../hooks/useToggle';
import MovieTable from '../shared/movie-table';

function SearchResultsTable() {
    const [searchResult, setsearchResult] = useState([{
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

    const [isfiltersshown, toggleisfiltersshown] = useToggle(false);
    
    const toggleList = (movieIndex, list) => {
        const movies = [...searchResult];
        movies[movieIndex][list] = !movies[movieIndex][list];
        setsearchResult(movies);
    }

    return (
        <div className="flex-1 bg-main-dark p-4">
            <div className="flex justify-between">
                <label className="text-white">Results for "Lord of the rings"</label>
                <button className="text-white lg:hidden" onClick={toggleisfiltersshown}><FaFilter/></button>
            </div>
            <div className={isfiltersshown ? 'block': 'hidden'}>
                <FilterTable inline="true" />
            </div>
            <MovieTable movies={searchResult} toggleList={toggleList} />
            <Pagination/>
        </div>
    )
}

export default SearchResultsTable;