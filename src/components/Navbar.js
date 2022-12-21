import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Logo from '../assets/planet_logo.png';
import NavbarStyles from './NavbarStyles.module.css';

const Navbar = () => {
  const location = useLocation();
  const rocketLinkStyles = (pathname) => {
    if (pathname === '/rockets' || pathname === '/' || pathname === '') {
      return `${NavbarStyles.linkStyles} ${NavbarStyles.active}`;
    }
    return `${NavbarStyles.linkStyles}`;
  };

  const missionLinkStyles = (pathname) => {
    if (pathname === '/mission') {
      return `${NavbarStyles.linkStyles} ${NavbarStyles.navLinkBorder} ${NavbarStyles.active}`;
    }
    return `${NavbarStyles.linkStyles} ${NavbarStyles.navLinkBorder}`;
  };

  const profileLinkStyles = (pathname) => {
    if (pathname === 'profile') {
      return `${NavbarStyles.linkStyles} ${NavbarStyles.navLinkBorder} ${NavbarStyles.active}`;
    }
    return `${NavbarStyles.linkStyles} ${NavbarStyles.navLinkBorder}`;
  };

  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.logoHolder}>
        <img src={Logo} alt="Planet" className={NavbarStyles.logo} />
        <h1>Space Travellers HUB</h1>
      </div>
      <div className={NavbarStyles.linksHolder}>
        <NavLink key={uuidv4()} className={rocketLinkStyles(location.pathname)} to="/rockets">
          Rockets
        </NavLink>
        <NavLink key={uuidv4()} className={missionLinkStyles(location.pathname)} to="/missions">
          Missions
        </NavLink>
        <NavLink key={uuidv4()} className={profileLinkStyles(location.pathname)} to="/profile">
          My Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
