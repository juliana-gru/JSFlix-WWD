import React from 'react';

import './Header.css';
import logo from './jsflix-logo.png';

const Header = ({ loginBtn, children }) => (
  <header className="header">
    <div className="header-logo">
      <a href="/">
        <img src={logo} alt="JSFLIX LOGO" className="logo" />
      </a>
    </div>
    {loginBtn && (
      <a href="/login">
        {' '}
        <button className="btn-login">LOGIN</button>{' '}
      </a>
    )}
    {children}
  </header>
);

export default Header;
