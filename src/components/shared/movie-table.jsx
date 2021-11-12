import Poster from './poster';
import {FaHeart, FaRegEye, FaGift, FaPlus} from 'react-icons/fa';

export default function MovieTable({movies, toggleList}) {
    return (
        <ul className="mt-4">
                {
                    movies.map((movie, movieIndex) => (
                        <li key={movie.name} className="flex p-1 bg-main odd:bg-main-light mb-1">
                            <div className="w-12 text-2xs"><Poster poster={movie.poster} name={movie.name} dark={movieIndex % 2 === 0}/></div>
                            <div className="flex-1 pl-2">
                                <span className="text-sm text-white font-bold">{movie.name} ({movie.year})</span>
                                <div>
                                {
                                    movie.genres.map((genre, i) => (
                                    <span key={movie.name + i + genre} className="text-sm text-white opacity-40 italic">{genre}{i < movie.genres.length - 1 ? ', ' : '.'}</span>
                                    ))
                                }
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center">
                                <button title="favorite" className={`p-2 md:py-0 md:pr-0 ${movie.fav ? 'text-danger' : 'text-black opacity-25'}`} onClick={()=>{toggleList(movieIndex, 'fav')}}><FaHeart/></button>
                                <button title="watch later" className={`p-2 md:py-0 md:pr-0 ${movie.later ? 'text-success' : 'text-black opacity-25'}`} onClick={()=>{toggleList(movieIndex, 'later')}}><FaRegEye/></button>
                                <button title="wish list" className={`p-2 md:py-0 md:pr-0 ${movie.wish ? 'text-warning' : 'text-black opacity-25'}`} onClick={()=>{toggleList(movieIndex, 'wish')}}><FaGift/></button>
                                <button title="own it" className={`p-2 md:py-0 md:pr-0 ${movie.own ? 'text-primary' : 'text-black opacity-25'}`} onClick={()=>{toggleList(movieIndex, 'own')}}><FaPlus/></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
    )
}