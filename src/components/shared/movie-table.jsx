import { useDispatch } from 'react-redux';
import Poster from './poster';
import {FaHeart, FaRegEye, FaGift, FaPlus} from 'react-icons/fa';
import { openDialog } from '../../service/dialog';

export default function MovieTable({movies, toggleList}) {
    const dispatch = useDispatch();

    return (
        <ul className="mt-4">
                {
                    movies.map((movie, movieIndex) => (
                        <li key={movie.id} className="flex p-1 bg-main odd:bg-main-light mb-1">
                            <div className="w-12 text-2xs"><Poster poster={movie.poster_path} name={movie.title} dark={movieIndex % 2 === 0} size="small"/></div>
                            <div className="flex-1 pl-2">
                                <span role="button" onClick={() => dispatch(openDialog({params: {id: movie.id}, type: 'movieDetails'}))} className="text-sm text-white font-bold">{movie.title} ({movie.year})</span>
                                <div>
                                {
                                    movie.genres.map((genre, i) => (
                                    <span key={genre.id} className="text-sm text-white opacity-40 italic">{genre.name}{i < movie.genres.length - 1 ? ', ' : '.'}</span>
                                    ))
                                }
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center">
                                <button title="favorite" className={`p-2 md:py-0 md:pr-0 ${movie.lists.includes('fav') ? 'text-danger' : 'text-black opacity-25'}`} onClick={()=>{toggleList(movieIndex, 'fav')}}><FaHeart/></button>
                                <button title="watch later" className={`p-2 md:py-0 md:pr-0 ${movie.lists.includes('later') ? 'text-success' : 'text-black opacity-25'}`} onClick={()=>{toggleList(movieIndex, 'later')}}><FaRegEye/></button>
                                <button title="wish list" className={`p-2 md:py-0 md:pr-0 ${movie.lists.includes('wish') ? 'text-warning' : 'text-black opacity-25'}`} onClick={()=>{toggleList(movieIndex, 'wish')}}><FaGift/></button>
                                <button title="own it" className={`p-2 md:py-0 md:pr-0 ${movie.lists.includes('own') ? 'text-primary' : 'text-black opacity-25'}`} onClick={()=>{toggleList(movieIndex, 'own')}}><FaPlus/></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
    )
}