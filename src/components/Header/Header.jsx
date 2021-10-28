import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-nav">
      <div className="header-nav-logo">
        <img src="" alt="logo" />
      </div>
      <ul className="header-nav-links">
        <li>Accueil</li>
        <li>Thèmes</li>
        <li>Résultats</li>
      </ul>
    </header>
  );
};

export default Header;
