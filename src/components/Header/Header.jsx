import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.gif';

const Header = () => {
  return (
    <header className="header-nav">
      <div className="header-nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="header-nav-links">
        <li>
          <Link className="header-nav-links-a" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="header-nav-links-a" to="/Themes">
            Thèmes
          </Link>
        </li>
        <li>
          <Link className="header-nav-links-a" to="/Resultats">
            Résultats
          </Link>
        </li>
        <li>
          <Link className="header-nav-links-a" to="/Quizz">
            Quizz
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
