import { useDispatch } from 'react-redux';
import Poster from './poster';
import { FaHeart, FaRegEye, FaGift, FaPlus } from 'react-icons/fa';
import { openDialog } from '../../service/dialog';
import Tooltip from './tooltip';

export default function MovieTable({ movies, toggleList, actionsDisabled }) {
    const dispatch = useDispatch();

    return (
        <ul className="mt-4">
            {
                movies.map((movie, movieIndex) => (
                    <li key={movie.id} className="flex p-1 bg-main odd:bg-main-light mb-1">
                        <div className="w-12 text-2xs"><Poster poster={movie.poster_path} name={movie.title} dark={movieIndex % 2 === 0} size="small" /></div>
                        <div className="flex-1 pl-2">
                            <span role="button" onClick={() => dispatch(openDialog({ params: { id: movie.id, timestamp: new Date() }, type: 'movieDetails' }))} className="text-sm text-white font-bold">{movie.title} ({movie.year})</span>
                            <div>
                                {
                                    movie.genres.map((genre, i) => (
                                        <span key={genre.id} className="text-sm text-white opacity-40 italic">{genre.name}{i < movie.genres.length - 1 ? ', ' : '.'}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center">
                            <button title="favorite" className={`group relative flex p-2 md:py-0 md:pr-0  ${actionsDisabled ? 'cursor-not-allowed' : ''}`} onClick={() => { toggleList(movieIndex, 'fav') }}>
                                {
                                    actionsDisabled ? (
                                        <span className="hidden group-hover:inline-block"><Tooltip width="250px" title="You're not signed in" body="Please sign in to add movies to your list!" /></span>
                                    ) : (undefined)
                                }
                                <FaHeart className={movie.lists.includes('fav') ? 'text-danger' : 'text-black opacity-25'} /></button>
                            <button title="watch later" className={`group relative flex p-2 md:py-0 md:pr-0 ${actionsDisabled ? 'cursor-not-allowed' : ''}`} onClick={() => { toggleList(movieIndex, 'later') }}>
                                {
                                    actionsDisabled ? (
                                        <span className="hidden group-hover:inline-block"><Tooltip width="250px" title="You're not signed in" body="Please sign in to add movies to your list!" /></span>
                                    ) : (undefined)
                                }
                                <FaRegEye className={movie.lists.includes('later') ? 'text-success' : 'text-black opacity-25'} /></button>
                            <button title="wish list" className={`group relative flex p-2 md:py-0 md:pr-0 ${actionsDisabled ? 'cursor-not-allowed' : ''}`} onClick={() => { toggleList(movieIndex, 'wish') }}>
                                {
                                    actionsDisabled ? (
                                        <span className="hidden group-hover:inline-block"><Tooltip width="250px" title="You're not signed in" body="Please sign in to add movies to your list!" /></span>
                                    ) : (undefined)
                                }
                                <FaGift className={movie.lists.includes('wish') ? 'text-warning' : 'text-black opacity-25'} /></button>
                            <button title="own it" className={`group relative flex p-2 md:py-0 md:pr-0 ${actionsDisabled ? 'cursor-not-allowed' : ''}`} onClick={() => { toggleList(movieIndex, 'own') }}>
                                {
                                    actionsDisabled ? (
                                        <span className="hidden group-hover:inline-block"><Tooltip width="250px" title="You're not signed in" body="Please sign in to add movies to your list!" /></span>
                                    ) : (undefined)
                                }
                                <FaPlus className={movie.lists.includes('own') ? 'text-primary' : 'text-black opacity-25'} /></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}