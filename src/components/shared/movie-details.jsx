import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { GrFormClose } from 'react-icons/gr';
import {FaHeart, FaRegEye, FaGift, FaPlus, FaChevronRight, FaChevronDown} from 'react-icons/fa';
import Poster from './poster';
import useToggle from '../../hooks/useToggle';
import { useGetMovieDetailsQuery, useGetMovieCreditsQuery } from '../../service/movie';
import { useToggleListMutation } from '../../service/movie-list';
import { closeDialog } from '../../service/dialog';
import FlagIcon from '../../service/flag-icon';

export default function MovieDetails() {
  let [showCast, toggleShowCast] = useToggle(false);

  const dialog = useSelector((state) => state.dialog.movieDetails);
  const {isFetching, error, data: movie = {lists: []}, isUninitialized} = useGetMovieDetailsQuery(dialog.params.id, {
    skip: !(dialog.params && dialog.params.id),
  });
  const {isFetching: creditsIsFetched, error: creditsError, data: credits, isUninitialized: creditsIsUninitialized} = useGetMovieCreditsQuery(dialog.params.id, {
    skip: !(dialog.params && dialog.params.id),
  });
  const dispatch = useDispatch();

  const [toggleList, { isLoading: toggleLoading, error: toggleError, isSuccess: toggleSuccess }] = useToggleListMutation();

  if(isUninitialized) return (<></>)
  return (
      <Transition appear show={dialog.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={()=> {dispatch(closeDialog({type: 'movieDetails'})); toggleShowCast(false)}}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block relative w-full max-w-lg my-8 overflow-hidden text-left align-middle transition-all transform border border-main-light bg-main-dark shadow-xl rounded-xl">
                  <button type="button" className="text-black opacity-25 absolute top-3 right-3 text-2xl" onClick={()=> {dispatch(closeDialog({type: 'movieDetails'})); toggleShowCast(false)}}>
                    <GrFormClose />
                  </button>
                <div className="pt-7 px-3 max-h-85vh flex flex-col">
                {isFetching ? (
                  <div className="flex animate-pulse">
                    <div className="w-3/12 h-5/12 bg-main-light rounded"></div>
                    <div className="w-9/12 px-5">
                        <span className="h-4 bg-main-light rounded block"></span>
                        <span className="h-6 bg-main-light rounded block"></span>
                    </div>
                  </div>
                ) : (
                  <>
                  <div className="flex">
                      <div className="w-3/12">
                        <Poster poster={movie.poster_path} name={movie.title} size="small"/>
                        <div className="mt-3 p-1 border border-main-light bg-main rounded flex">
                          <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="imdb" />
                          </a>
                          <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="TMDB" />
                          </a>
                        </div>
                      </div>
                      <div className="w-9/12 px-5">
                          <Dialog.Title
                              className="text-lg font-medium leading-6 text-white"
                              >
                              {movie.title}
                          </Dialog.Title>
                          <div className="text-sm text-main-light py-1 border-b border-main-light"> 
                          {
                            movie.production_countries.map(country => (
                              <FlagIcon key={country} code={country} className="mr-1"/>
                            ))
                          }
                              
                              <span>| {movie.runtime} | </span>
                              <span>{movie.release_date}</span>
                          </div>
                          <p className="pt-2 text-xs text-white">{movie.overview}</p>
                      </div>
                  </div>
                  <div className="flex justify-end pb-2 pt-3">
                  <button className="text-white border border-main-light text-sm rounded bg-main px-2 py-1 flex items-center" onClick={toggleShowCast} disabled={isFetching || creditsIsFetched}>cast and crew <span className="text-black opacity-25 ml-1">{showCast ? (<FaChevronDown/>) : (<FaChevronRight/>)}</span></button>
              </div>
              </>
                )}
                {
                  credits ? (
                    <Transition show={showCast} as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-y-0"
                >
                    <div className="border-t border-main-light pb-2 overflow-auto flex-1">
                        <h3 className="text-md font-medium text-white my-2">Director</h3>
                          <div className="flex flex-wrap px-2 mb-1">
                          {credits.directors.map(director => (
                            <div className="w-6/12 flex text-2xs mb-2" key={director.id}>
                                <div className="w-3/12 md:w-2/12"><Poster poster={director.profile_path} name={director.name} size="small"/></div>
                                <div className="flex-1 text-sm pl-3 pr-1">
                                    <h4 className="text-white mb-2">{director.name}</h4>
                                    <span className="text-main-light italic">({director.job})</span>
                                </div>
                            </div>
                          ))}
                        </div>
                        <h3 className="text-md font-medium text-white my-2">Writers</h3>
                        <div className="flex flex-wrap px-2 mb-1">
                            {credits.writers.map(writer => (
                              <div className="w-6/12 flex text-2xs mb-2" key={writer.id}>
                                  <div className="w-3/12 md:w-2/12"><Poster poster={writer.profile_path} name={writer.name} size="small"/></div>
                                  <div className="flex-1 text-sm pl-3 pr-1">
                                      <h4 className="text-white mb-2">{writer.name}</h4>
                                      <span className="text-main-light italic">({writer.job})</span>
                                  </div>
                              </div>
                            ))}
                        </div>
                        <h3 className="text-md font-medium text-white my-2">Cast</h3>
                        <div className="flex flex-wrap px-2 mb-1">
                            {credits.actors.map(actor => (
                              <div className="w-6/12 flex text-2xs mb-2" key={actor.id}>
                                  <div className="w-3/12 md:w-2/12"><Poster poster={actor.profile_path} name={actor.name} size="small"/></div>
                                  <div className="flex-1 text-sm pl-3 pr-1">
                                      <h4 className="text-white mb-2">{actor.name}</h4>
                                      <span className="text-main-light italic">({actor.character})</span>
                                  </div>
                              </div>
                            ))}
                        </div>
                    </div>
                </Transition>
                  ) : (
                    <></>
                  )
                }
                {
                  isFetching ? (
                    <div className="animate-pulse border-t border-main-light text-sm text-main-light">
                      <span className="h-4 bg-main-light rounded block"></span>
                    </div>
                  ) : (
                    <div className="border-t border-main-light text-sm text-main-light">
                    {
                        movie.genres.map((genre, index) => (
                            <span key={genre + index}>{genre + (index < movie.genres.length - 1 ? ' | ' : '')}</span>
                        ))
                    }
                  </div>
                  )
                }
                </div>

                <div className="mt-3 flex">
                  <button disabled={isFetching} title="favorite" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.lists.includes('fav') ? 'bg-danger border-danger-dark' : 'bg-main border-danger'}`} onClick={() => {toggleList({list: 'fav', movieID: movie.id})}}>
                      <span className="text-black opacity-25"><FaHeart /></span>
                  </button>
                  <button disabled={isFetching} title="watch later" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.lists.includes('later') ? 'bg-success border-success-dark' : 'bg-main border-success'}`} onClick={() => {toggleList({list: 'later', movieID: movie.id})}}>
                      <span className="text-black opacity-25"><FaRegEye /></span>
                  </button>
                  <button disabled={isFetching} title="wish list" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.lists.includes('wish') ? 'bg-warning border-warning-dark' : 'bg-main border-warning'}`} onClick={() => {toggleList({list: 'wish', movieID: movie.id})}}>
                      <span className="text-black opacity-25"><FaGift /></span>
                  </button>
                  <button disabled={isFetching} title="own it" className={`flex-1 flex justify-center items-center py-3 border-t-4 ${movie.lists.includes('own') ? 'bg-primary border-primary-dark' : 'bg-main border-primary'}`} onClick={() => {toggleList({list: 'own', movieID: movie.id})}}>
                      <span className="text-black opacity-25"><FaPlus /></span>
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    
  )
}
