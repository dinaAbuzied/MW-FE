import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { GrFormClose } from 'react-icons/gr';
import {FaHeart, FaRegEye, FaGift, FaPlus, FaChevronRight, FaChevronDown} from 'react-icons/fa';
import Poster from './poster';
import useToggle from '../../hooks/useToggle';
import { toggleFav, toggleLater, toggleOwn, toggleWish } from '../../features/movie/movieSlice'

export default function MovieDetails() {
  let [isOpen, toggleIsOpen] = useToggle(true);
  let [showCast, toggleShowCast] = useToggle(false);

  const movie = useSelector((state) => state.movie)
  const dispatch = useDispatch();

  return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={()=> toggleIsOpen(false)}
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
                  <button type="button" className="text-black opacity-25 absolute top-3 right-3 text-2xl" onClick={()=> toggleIsOpen(false)}>
                    <GrFormClose />
                  </button>
                <div className="pt-7 px-3">
                <div className="flex">
                    <div className="w-3/12"><Poster poster={movie.poster} name={movie.name}/></div>
                    <div className="w-9/12 px-5">
                        <Dialog.Title
                            className="text-lg font-medium leading-6 text-white"
                            >
                            {movie.name}
                        </Dialog.Title>
                        <div className="text-sm text-main-light py-1 border-b border-main-light">
                            <span>{movie.duration} | </span>
                            <span>{movie.year}</span>
                        </div>
                        <p className="pt-2 text-xs text-white">{movie.desc}</p>
                    </div>
                </div>
                <div className="flex justify-end pb-2 pt-3">
                    <button className="text-white border border-main-light text-sm rounded bg-main px-2 py-1 flex items-center" onClick={toggleShowCast}>cast and crew <span className="text-black opacity-25 ml-1">{showCast ? (<FaChevronDown/>) : (<FaChevronRight/>)}</span></button>
                </div>
                <Transition show={showCast} as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-y-0"
                >
                    <div className="border-t border-main-light pb-2">
                        <h3 className="text-md font-medium text-white my-2">Director</h3>
                        <div className="flex flex-wrap px-2 mb-1">
                            <div className="w-6/12 flex text-2xs mb-2">
                                <div className="w-3/12 md:w-2/12"><Poster poster={undefined} name="Peter Jackson"/></div>
                                <div className="flex-1 text-sm pl-3">
                                    <h4 className="text-white mb-2">Peter Jackson</h4>
                                    <span className="text-main-light italic">(Director)</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-md font-medium text-white my-2">Writers</h3>
                        <div className="flex flex-wrap px-2 mb-1">
                            <div className="w-6/12 flex text-2xs mb-2">
                                <div className="w-3/12 md:w-2/12"><Poster poster={undefined} name="Peter Jackson"/></div>
                                <div className="flex-1 text-sm pl-3">
                                    <h4 className="text-white mb-2">Peter Jackson</h4>
                                    <span className="text-main-light italic">(Screenplay)</span>
                                </div>
                            </div>
                            <div className="w-6/12 flex text-2xs mb-2">
                                <div className="w-3/12 md:w-2/12"><Poster poster={undefined} name="Peter Jackson"/></div>
                                <div className="flex-1 text-sm pl-3">
                                    <h4 className="text-white mb-2">J.R.R. Tolkien</h4>
                                    <span className="text-main-light italic">(Novel)</span>
                                </div>
                            </div>
                            <div className="w-6/12 flex text-2xs mb-2">
                                <div className="w-3/12 md:w-2/12"><Poster poster={undefined} name="Peter Jackson"/></div>
                                <div className="flex-1 text-sm pl-3">
                                    <h4 className="text-white mb-2">Philippa Boyens</h4>
                                    <span className="text-main-light italic">(Screenplay)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
                <div className="border-t border-main-light text-sm text-main-light">
                    {
                        movie.genres.map((genre, index) => (
                            <span key={genre + index}>{genre + (index < movie.genres.length - 1 ? ' | ' : '')}</span>
                        ))
                    }
                </div>
                </div>

                <div className="mt-3 flex">
                  <button title="favorite" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.fav ? 'bg-danger border-danger-dark' : 'bg-main border-danger'}`} onClick={() => dispatch(toggleFav())}>
                      <span className="text-black opacity-25"><FaHeart /></span>
                  </button>
                  <button title="watch later" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.later ? 'bg-success border-success-dark' : 'bg-main border-success'}`} onClick={() => dispatch(toggleLater())}>
                      <span className="text-black opacity-25"><FaRegEye /></span>
                  </button>
                  <button title="wish list" className={`flex-1 mr-0.5 flex justify-center items-center py-3 border-t-4 ${movie.wish ? 'bg-warning border-warning-dark' : 'bg-main border-warning'}`} onClick={() => dispatch(toggleWish())}>
                      <span className="text-black opacity-25"><FaGift /></span>
                  </button>
                  <button title="own it" className={`flex-1 flex justify-center items-center py-3 border-t-4 ${movie.own ? 'bg-primary border-primary-dark' : 'bg-main border-primary'}`} onClick={() => dispatch(toggleOwn())}>
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
