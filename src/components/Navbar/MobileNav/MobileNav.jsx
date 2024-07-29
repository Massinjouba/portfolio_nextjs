import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { logout } from '../../../store/actions/authActions';

function MobileNav({ isOpen, toggleMenu, handleRateMeClick }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toggleMenu(); // Ferme le menu après la déconnexion
  };

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
          <Link href='/' className='logo'>
            <h1 className='logo'>Dev-Folio</h1>
          </Link>
        <ul>
          <li>
            <Link href='/#section1' passHref>
              <div className='menu-item'>Home</div>
            </Link>
          </li>
          <li>
            <Link href='/#section2' passHref>
              <div className='menu-item'>Skills</div>
            </Link>
          </li>
          <li>
            <Link href='/#section3' passHref>
              <div className='menu-item'>Projects</div>
            </Link>
          </li>
          <li>
            <Link href='/Contact' passHref>
              <div className='menu-item'>Contact me</div>
            </Link>
          </li>
          <li>
            <Link href='/FeedBacks' passHref>
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
      </div>
    </div>
  );
}

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  handleRateMeClick: PropTypes.func.isRequired,
};

export default MobileNav;
