import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaChartPie, FaSearch, FaUserCircle, FaSignOutAlt, FaAngleDoubleRight } from 'react-icons/fa';
import { FiFilm, FiMenu } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';
import AccountDropDown from './account-dropdown';
import Poster from '../poster';

function Header() {
    const [hideMobileMenu, setHideMobileMenu] = useState(true);

    const searchResult = [{
      name: 'The Lord of the Rings: Fellowship Of Ring',
      year: 2001,
      poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      genres: ['Action','Adventure','Drama','Fantasy']
    }, {
      name: 'The Lord of the Rings: The Two Towers',
      year: 2002,
      poster: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      genres: ['Action','Adventure','Drama','Fantasy']
    }, {
      name: 'The Lord of the Rings: Return Of The King',
      year: 2003,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDE5MTk0M15BMl5BanBnXkFtZTcwMzA3MTk2Mw@@._V1_.jpg',
      genres: ['Action','Adventure','Drama','Fantasy']
    }];

  const toggleMobileMenu = () => {
    setHideMobileMenu(!hideMobileMenu);
  }
    return (
        <header className="flex flex-wrap bg-main-dark">
          <div className="flex flex-1">
            <button onClick={toggleMobileMenu} className="nav-btn mr-1 block md:hidden"><FiMenu /></button>
            <Link className="nav-btn mr-3 hidden md:flex border-success" to="/"><FaHome className="mr-1" />Home</Link>
            <div className="flex-1 my-2 max-w-2xl relative">
              <div className="flex rounded border border-main-light overflow-hidden">
                <input tabIndex="0" type="text" className="flex-1 bg-main px-2" placeholder="Search..." />
                <button className="text-white bg-success hover:bg-success-dark p-1.5"><FaSearch /></button>
              </div>
              <ul className="absolute w-full bg-main mt-1.5 rounded border border-main-light overflow-hidden hidden">
                {
                  searchResult.map(movie => (
                    <li key={movie.name} className="flex p-2 border-b border-main-light">
                      <div className="w-10 text-2xs"><Poster poster={movie.poster} name={movie.name}/></div>
                      <div className="flex-1 pl-5">
                        <span className="text-sm text-white font-bold">{movie.name} ({movie.year})</span>
                        <div>
                          {
                            movie.genres.map((genre, i) => (
                              <span key={movie.name + i + genre} className="text-sm text-main-light italic">{genre}{i < movie.genres.length - 1 ? ', ' : '.'}</span>
                            ))
                          }
                        </div>
                      </div>
                    </li>
                  ))
                }
                <li>
                  <a className="flex p-4 justify-between items-center bg-main-dark hover:bg-success group" href="www.imdb.com">
                    <span className="text-white">see more results for "Lord of the Rings"</span>
                    <FaAngleDoubleRight className="text-white opacity-20 group-hover:text-black" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <Link className="nav-btn hidden md:flex" to="/my-movies"><FiFilm className="mr-1" />My Movies</Link>
            <button className="flex text-white h-full items-center px-3 py-2 text-lg md:hidden"><FaUserCircle className="mr-1" /></button>
            <AccountDropDown />
          </div>
          <div className={`${hideMobileMenu ? 'hidden' : 'block'} w-full divide-y divide-main-light`}>
            <div>
                <Link className="nav-btn flex w-full" to="/"><FaHome className="mr-1" />Home</Link>
                <Link className="nav-btn flex w-full" to="/my-movies"><FiFilm className="mr-1" />My Movies</Link>
                </div>
                <div>
                <Link className="nav-btn flex w-full" to="/account-settings"><MdSettings className="mr-1" />Account settings</Link>
                </div>
                <div>
                <Link className="nav-btn flex w-full" to="/sign-in"><FaSignOutAlt className="mr-1" />Signout</Link>
            </div>
          </div>
        </header>
    );
}

export default Header;