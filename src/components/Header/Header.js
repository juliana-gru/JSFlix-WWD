import React from 'react'

import './Header.css';
import logo from './jsflix-logo.png';
import { Children } from 'react';

const Header = ({loginBtn, children}) => {  
  return (
    <header className="index-header">
      <div className="header-logo">
        <img src={logo} alt="JSFLIX LOGO" className="logo" />
      </div>
        {loginBtn && <a href="/login"> <button className="btn-login">LOGIN</button> </a>}
        {children}
    </header>
  )
}

export default Header;
