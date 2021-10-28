import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-nav">
      <div className="header-nav-logo">
        <img src="" alt="logo" />
      </div>
      <ul className="header-nav-links">
        <li>
          {' '}
          <Link exact to="/">
            Accueil
          </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to="/Themes">Thèmes</Link>{' '}
        </li>
        <li>
          {' '}
          <Link to="/Resultats">Résultats</Link>{' '}
        </li>
        <li>
          {' '}
          <Link to="/Quizz">Quizz</Link>{' '}
        </li>
      </ul>
    </header>
  );
};

export default Header;
