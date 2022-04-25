import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Poster from '../poster';
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useGetShortMovieListQuery } from '../../../service/search';
import { openDialog } from '../../../service/dialog';
import { newSearch } from '../../../service/query';

export default function SearchResults({ phrase }) {

  const dispatch = useDispatch();
  const [setSearchPhrase] = useState('');

  const onClick = () => {
    dispatch(newSearch(phrase));
    setSearchPhrase('');
  }

  const { isFetching, error, data = [], isUninitialized } = useGetShortMovieListQuery(phrase, {
    skip: phrase.length < 2
  });

  if (isUninitialized) return (<></>);
  if (isFetching) return (
    <ul className="absolute w-full bg-main mt-1.5 rounded border border-main-light overflow-hidden z-10">
      {[0, 1].map((key) => (
        <li key={key} className="flex p-2 border-b border-main-light animate-pulse">
          <div className="w-10 h-14 bg-main-light rounded"></div>
          <div className="flex-1 pl-5">
            <span className="w-3/4 h-4 bg-main-light rounded block"></span>
          </div>
        </li>
      ))}
    </ul>);
  return (
    <ul className="absolute w-full bg-main mt-1.5 rounded border border-main-light overflow-hidden z-10">
      {
        data.map(movie => (
          <li role="button" onClick={() => dispatch(openDialog({ params: { id: movie.id }, type: 'movieDetails' }))} key={movie.id} className="flex p-2 border-b border-main-light">
            <div className="w-10 text-2xs"><Poster poster={movie.poster_path} name={movie.title} size="small" /></div>
            <div className="flex-1 pl-5">
              <span className="text-sm text-white font-bold">{movie.title} ({movie.year})</span>
              <div>
                {
                  movie.genres.map((genre, i) => (
                    <span key={genre.id} className="text-sm text-main-light italic">{genre.name}{i < movie.genres.length - 1 ? ', ' : '.'}</span>
                  ))
                }
              </div>
            </div>
          </li>
        ))
      }
      <li>
        <Link className="flex p-4 justify-between items-center bg-main-dark hover:bg-success group" to={'/search/' + phrase} onClick={onClick}>
          <span className="text-white">see more results for "{phrase}"</span>
          <FaAngleDoubleRight className="text-white opacity-20 group-hover:text-black" />
        </Link>
      </li>
    </ul>
  )
}