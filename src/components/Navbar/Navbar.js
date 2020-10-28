import React from 'react';

import userImage from './user-image.png';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <div className="mobile-nav">
      <i>Browse</i>
      <i className="fas fa-caret-down" />
    </div>
    <nav>
      <ul className="nav-items">
        <li>
          Home
        </li>
        <li>
          TV Shows
        </li>
        <li>
          Movies
        </li>
        <li>
          Latest
        </li>
        <li>
          My list
        </li>
      </ul>
    </nav>
    <div className="user-menu">
      <i className="fas fa-bell notification-bell" />
      <img src={userImage} className="user-icon" alt="user" />
      <i className="fas fa-caret-down" />
    </div>
  </div>
);

export default Navbar;
