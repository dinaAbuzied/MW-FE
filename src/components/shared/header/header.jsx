import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { FiFilm, FiMenu } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';
import useDebounce from '../../../hooks/useDebounce';
import SearchResults from './searchResults';
import AccountDropDown from './account-dropdown';

function Header() {
    const [hideMobileMenu, setHideMobileMenu] = useState(true);
    const [searchPhrase, setSearchPhrase] = useState('');
    const debouncedSearchTerm = useDebounce(searchPhrase, 500);

    const onChange = (event) => {
      setSearchPhrase(event.target.value);
    }

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
                <input tabIndex="0" type="text" className="flex-1 bg-main px-2 text-white" placeholder="Search..." onChange={onChange} />
                <button className="text-white bg-success hover:bg-success-dark p-1.5"><FaSearch /></button>
              </div>
              <SearchResults phrase={debouncedSearchTerm} />
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