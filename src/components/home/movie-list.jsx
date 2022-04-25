import { useDispatch } from 'react-redux';
import Poster from "../shared/poster";
import { useToggleListMutation } from '../../service/movie-list';
import {FaHeart, FaRegEye, FaGift, FaPlus} from 'react-icons/fa';
import { openDialog } from '../../service/dialog';

export default function MovieList ({title, list}) {
    const dispatch = useDispatch();
    const [toggleList, { isLoading: toggleLoading, error: toggleError, isSuccess: toggleSuccess }] = useToggleListMutation();

    const btnClicked = (e, movieList, movieID) => {
        e.preventDefault();
        toggleList({list: movieList, movieID})
    }

    return (
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg w-full mb-4">
            <header className="p-4 bg-main"><h2 className="text-white">{title}</h2></header>
            <main className="bg-main-dark overflow-x-auto whitespace-nowrap">
                {
                    list.map((movie) => (
                        <div key={movie.id} className="inline-block w-6/12 md:w-4/12 lg:w-2/12 mx-2 my-3 relative group cursor-pointer">
                            <Poster poster={movie.poster_path}  name={movie.name} size="medium"/>
                            <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
                                <div className="transition ease-in-out duration-500 bg-black opacity-0 w-full h-full group-hover:opacity-40" role="button" onClick={() => dispatch(openDialog({params: {id: movie.id}, type: 'movieDetails'}))}></div>
                                <div className="transition-bottom ease-in-out duration-500 flex bg-main-dark absolute -bottom-11 w-full group-hover:bottom-0">
                                    <button title="favorite" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.lists.includes('fav') ? 'bg-danger border-danger-dark' : 'bg-main border-danger'}`} onClick={(e) => {btnClicked(e, 'fav', movie.id)}}><FaHeart className="text-black opacity-25"/></button>
                                    <button title="watch later" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.lists.includes('later') ? 'bg-success border-success-dark' : 'bg-main border-success'}`} onClick={(e) => {btnClicked(e, 'later', movie.id)}}><FaRegEye className="text-black opacity-25"/></button>
                                    <button title="wish list" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.lists.includes('wish') ? 'bg-warning border-warning-dark' : 'bg-main border-warning'}`} onClick={(e) => {btnClicked(e, 'wish', movie.id)}}><FaGift className="text-black opacity-25"/></button>
                                    <button title="own it" className={`flex-1 flex justify-center items-center py-3 border-t-4 ${movie.lists.includes('own') ? 'bg-primary border-primary-dark' : 'bg-main border-primary'}`} onClick={(e) => {btnClicked(e, 'own', movie.id)}}><FaPlus className="text-black opacity-25"/></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}