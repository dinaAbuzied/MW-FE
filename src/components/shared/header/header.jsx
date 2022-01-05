import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { FaHome, FaSearch, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { FiFilm, FiMenu, FiLogIn } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';
import useDebounce from '../../../hooks/useDebounce';
import SearchResults from './searchResults';
import AccountDropDown from './account-dropdown';
import { newSearch } from '../../../service/query';

function Header() {
    const dispatch = useDispatch();
    const [hideMobileMenu, setHideMobileMenu] = useState(true);
    const [searchPhrase, setSearchPhrase] = useState('');
    const debouncedSearchTerm = useDebounce(searchPhrase, 500);

    const onChange = (event) => {
      setSearchPhrase(event.target.value);
    }

    const onClick = () => {
      dispatch(newSearch(searchPhrase));
      setSearchPhrase('');
    }

  const navLinkStyle = 'nav-btn mr-3 hidden md:flex';
  const navLinkStyleActive = 'nav-btn mr-3 hidden md:flex border-success';
  const toggleMobileMenu = () => {
    setHideMobileMenu(!hideMobileMenu);
  }

  const authenticated = useSelector((state) => state.user.authenticated)
  console.log(authenticated);
    return (
        <header className="flex flex-wrap bg-main-dark">
          <div className="flex flex-1">
            <button onClick={toggleMobileMenu} className="nav-btn mr-1 block md:hidden"><FiMenu /></button>
            <NavLink className={({isActive}) => isActive ? navLinkStyleActive : navLinkStyle} to="/"><FaHome className="mr-1" />Home</NavLink>
            <div className="flex-1 my-2 max-w-2xl relative">
              <div className="flex rounded border border-main-light overflow-hidden">
                <input tabIndex="0" type="text" className="flex-1 bg-main px-2 text-white" placeholder="Search..." onChange={onChange} />
                <Link className="text-white bg-success hover:bg-success-dark p-1.5" to={'/search/' + searchPhrase} onClick={onClick}><FaSearch /></Link>
              </div>
              <SearchResults phrase={debouncedSearchTerm} />
            </div>
          </div>
          <div className="flex">
            {
              authenticated ? 
              (
                <>
                  <NavLink className={({isActive}) => isActive ? navLinkStyleActive : navLinkStyle} to="/my-movies"><FiFilm className="mr-1" />My Movies</NavLink>
                  <button className="flex text-white h-full items-center px-3 py-2 text-lg md:hidden"><FaUserCircle className="mr-1" /></button>
                  <AccountDropDown />
                </>
              ) : 
              (
                <NavLink className={navLinkStyle} to="/sign-in"><FiLogIn className="mr-1"/> Sign in</NavLink>
              )
            }
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