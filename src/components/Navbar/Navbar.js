import React from 'react';

import userImage from './user-image.png';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <div className="mobile-nav">
      <a>Browse</a>
      <i className="fas fa-caret-down" />
    </div>
    <nav>
      <ul className="nav-items">
        <li>
          {' '}
          <a>Home</a>{' '}
        </li>
        <li>
          {' '}
          <a>TV Shows</a>{' '}
        </li>
        <li>
          {' '}
          <a>Movies</a>{' '}
        </li>
        <li>
          {' '}
          <a>Latest</a>{' '}
        </li>
        <li>
          {' '}
          <a>My list</a>{' '}
        </li>
      </ul>
    </nav>
    <div className="user-menu">
      <i className="fas fa-bell notification-bell" />
      <img src={userImage} className="user-icon" />
      <i className="fas fa-caret-down" />
    </div>
  </div>
);

export default Navbar;
