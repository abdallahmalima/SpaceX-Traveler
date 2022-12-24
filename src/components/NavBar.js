import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/planet_logo.png';
import NavBarStyles from './NavBarStyles.module.css';

const NavBar = () => {
  const location = useLocation();
  const rocketLinkStyles = (pathname) => {
    if (pathname === '/rockets' || pathname === '/' || pathname === '') {
      return `${NavBarStyles.linkStyles} ${NavBarStyles.marginRight}  ${NavBarStyles.active}`;
    }
    return `${NavBarStyles.linkStyles} ${NavBarStyles.marginRight} `;
  };

  const missionLinkStyles = (pathname) => {
    if (pathname === '/missions') {
      return `${NavBarStyles.linkStyles} ${NavBarStyles.navLinkBorder} ${NavBarStyles.active}`;
    }
    return `${NavBarStyles.linkStyles} ${NavBarStyles.navLinkBorder}`;
  };

  const profileLinkStyles = (pathname) => {
    if (pathname === 'profile') {
      return `${NavBarStyles.linkStyles} ${NavBarStyles.marginLeft} ${NavBarStyles.navLinkBorder} ${NavBarStyles.active}`;
    }
    return `${NavBarStyles.linkStyles} ${NavBarStyles.marginLeft}`;
  };

  return (
    <nav className={NavBarStyles.navbar}>
      <div className={NavBarStyles.logoHolder}>
        <img src={Logo} alt="Planet" className={`${NavBarStyles.logo} ${NavBarStyles.marginRight}`} />
        <h1>Space Travellers&apos; Hub</h1>
      </div>
      <div className={NavBarStyles.linksHolder}>
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

export default NavBar;
