import React from 'react'

import userImage from './user-image.png'
import './Navbar.css'

const Navbar = () => {
  return(
    <div className="navbar-container">
      <div className="mobile-nav">
        <a>Browse</a>
        <i className="fas fa-caret-down"></i>
      </div>      
      <nav>
        <ul className="nav-items">
          <li> <a>Home</a> </li>
          <li> <a>TV Shows</a> </li>
          <li> <a>Movies</a> </li>
          <li> <a>Latest</a> </li>
          <li> <a>My list</a> </li>
        </ul>
      </nav>
      <div className="user-menu">
        <i className="fas fa-bell notification-bell"></i>        
        <img src={userImage} className="user-icon"></img>        
        <i className="fas fa-caret-down"></i>        
      </div>
    </div>
  )
}

export default Navbar;