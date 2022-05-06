import MovieTable from '../shared/movie-table';
import Pagination from '../shared/pagination';
import Header from '../shared/header/header';
import { useState, useEffect } from 'react';
import { FiFilm } from 'react-icons/fi';
import { FaHeart, FaRegEye, FaGift, FaPlus } from 'react-icons/fa';
import { useGetListsQuery } from '../../service/movie-list';
import { useToggleListMutation } from '../../service/movie-list';

export default function MyMovies() {
    const { isFetching, error, data = [], isUninitialized, isSuccess } = useGetListsQuery();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (isSuccess) {
            setMovies(data);
        }
    }, [isSuccess]);

    const [selectedBtn, setSelectedBtn] = useState('all');

    const [toggleList, { isLoading: toggleLoading, error: toggleError, isSuccess: toggleSuccess }] = useToggleListMutation();
    const btnClicked = (e, movieID, list) => {
        e.preventDefault();
        toggleList({ list, movieID })
    }

    useEffect(() => {
        if (toggleSuccess) {
            setMovies(data);
        }
    }, [toggleSuccess]);

    const selectList = (list) => {
        setSelectedBtn(list);
        if (list === 'all') return setMovies(data);
        const tempMovies = data.filter(movie => movie.lists.includes(list))
        setMovies(tempMovies);
    }

    const changePage = (page) => {

    }

    const getListLength = (list) => {
        let count = 0;
        data.map(movie => {
            if (movie.lists.includes(list)) {
                count++;
            }
        })
        return count;
    }

    if (isUninitialized) return (<></>)
    return (
        <>
            <Header />
            <main className="p-4 max-w-screen-xl mx-auto">
                <div className="flex justify-between lg:justify-start">
                    <button onClick={() => selectList('all')} className={`${selectedBtn === 'all' ? 'bg-main-light text-main-dark' : 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center text-lg`}>
                        <span className="flex items-center">
                            <FiFilm className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">All</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">{data.length}</span>
                    </button>
                    <button onClick={() => selectList('fav')} className={`${selectedBtn === 'fav' ? 'bg-danger text-white' : 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center lg:ml-5 text-lg`}>
                        <span className="flex items-center">
                            <FaHeart className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">Favourite</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">{getListLength('fav')}</span>
                    </button>
                    <button onClick={() => selectList('later')} className={`${selectedBtn === 'later' ? 'bg-warning text-white' : 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center lg:ml-5 text-lg`}>
                        <span className="flex items-center">
                            <FaRegEye className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">Watch Later</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">{getListLength('later')}</span>
                    </button>
                    <button onClick={() => selectList('wish')} className={`${selectedBtn === 'wish' ? 'bg-success text-white' : 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center lg:ml-5 text-lg`}>
                        <span className="flex items-center">
                            <FaGift className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">Wish List</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">{getListLength('wish')}</span>
                    </button>
                    <button onClick={() => selectList('own')} className={`${selectedBtn === 'own' ? 'bg-primary text-white' : 'bg-main-dark text-main-light'} lg:px-5 lg:py-3 px-2 py-1 rounded flex items-center lg:ml-5 text-lg`}>
                        <span className="flex items-center">
                            <FaPlus className="m-2 sm:ml-0 sm:my-0 text-black opacity-25" /> <span className="hidden md:block">Own It</span>
                        </span>
                        <span className="p-1 lg:p-2 lg:ml-4 hidden sm:block">{getListLength('own')}</span>
                    </button>
                </div>
                <div className="bg-main-dark p-4 mt-4">
                    <MovieTable movies={movies} toggleList={btnClicked} />
                    <Pagination currentPage="1" pageSize="20" totalResults={movies.length} changePage={changePage} totalPages="1" />
                </div>
            </main>
        </>
    )
}