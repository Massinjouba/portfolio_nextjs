import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import MobileNav from './MobileNav/MobileNav.jsx';
import Link from 'next/link';
import Image from 'next/image';
import { logout } from '../../store/actions/authActions.js';

const Navbar = ({ setIsOpenPopup }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleRateMeClick = () => {
    setIsOpenPopup(true);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <MobileNav 
        isOpen={openMenu} 
        toggleMenu={toggleMenu} 
        handleRateMeClick={handleRateMeClick} 
      />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <Link href='/' className='logo'>
            <h1 className='logo'>Dev-Folio</h1>
          </Link>
          <ul>
            <li>
              <Link href='/#section1'>
                <div className='menu-item'>Home</div>
              </Link>
            </li>
            <li>
              <Link href='/#section2'>
                <div className='menu-item'>Skills</div>
              </Link>
            </li>
            <li>
              <Link href='/#section3'>
                <div className='menu-item'>Projects</div>
              </Link>
            </li>
            <li>
              <Link href='/Contact'>
                <div className='menu-item'>Contact me</div>
              </Link>
            </li>
            <li>
              <Link href='/FeedBacks'>
                <div className='menu-item'>FeedBacks</div>
              </Link>
            </li>
            <button className='contact-btn' onClick={handleRateMeClick}>Rate me</button>
            {isAuthenticated && (
              <button className='logout-btn' onClick={handleLogout}>
                <Image 
                  src="/assets/icons/se-deconnecter.png" 
                  alt="Logout" 
                  width={24} 
                  height={24} 
                />
              </button>
            )}
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <Image 
              src={openMenu ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"} 
              alt={openMenu ? "Close menu" : "Open menu"} 
              width={24} 
              height={24} 
            />
          </button> 
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  setIsOpenPopup: PropTypes.func.isRequired
};

export default Navbar;
