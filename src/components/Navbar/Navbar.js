import React from 'react'

import userImage from './user-image.png'
import './Navbar.css'

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="mobile-nav">
        <a>Browse</a>
        <i className="fas fa-caret-down"></i>
      </div>      
      <nav>
        <ul>
          <li> <a>Home</a> </li>
          <li> <a>TV Shows</a> </li>
          <li> <a>Movies</a> </li>
          <li> <a>Latest</a> </li>
          <li> <a>My list</a> </li>
        </ul>
      </nav>
      <div className="user-menu">
        <span className="notification-bell">
          <i className="fas fa-bell"></i>
        </span>
        <span className="user-icon">
          <img src={userImage}></img>
        </span>
        <span className="menu-icon">
          <i className="fas fa-caret-down"></i>
        </span>
      </div>
    </div>
  )
}

export default Navbar;