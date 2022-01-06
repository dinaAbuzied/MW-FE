import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { MdSettings, MdArrowDropDown } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from '@headlessui/react';
import { NavLink } from "react-router-dom";
import { logout } from '../../../service/user-slice';

function AccountDropDown() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

    return(
    <Menu as="div" className="relative hidden md:block">
    <Menu.Button className="flex text-white h-full items-center px-3 py-2 text-lg hover:bg-main"><FaUserCircle className="mr-1" /> {user.username} <MdArrowDropDown className="ml-1"/></Menu.Button>
    <Menu.Items className="absolute right-0 w-56 mt-1 origin-top-right bg-main-dark border border-main-darker divide-y divide-main-light text-white z-10">
      <div>
        {/* <Menu.Item>
          {({ active }) => (
            <a
              className={`
          ${active ? '' : ''
                }
          p-2 flex items-center hover:bg-main`}
              href="/account-settings"
            >
              <FaUserCircle className="mr-1" />
              Profile settings
            </a>
          )}
        </Menu.Item> */}
        <Menu.Item>
          {({ active }) => (
            <NavLink
              className={`
            ${active ? '' : ''
                }
            p-2 flex items-center hover:bg-main`}
              to="/account-settings"
            >
              <MdSettings className="mr-1" />
              Account settings
            </NavLink>
          )}
        </Menu.Item>
      </div>
      <div>
        <Menu.Item>
            <NavLink
             onClick={()=>{dispatch(logout());}}
              className={`p-2 flex items-center hover:bg-main`}
              to="/sign-in"
            >
              <FaSignOutAlt className="mr-1" />
              Signout
            </NavLink>
        </Menu.Item>
      </div>
    </Menu.Items>
  </Menu>
  )
}

export default AccountDropDown;