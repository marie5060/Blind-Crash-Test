<<<<<<< HEAD
/* eslint-disable */
import React from 'react';
=======
/*eslint-disable*/
import React, { useState } from 'react';
>>>>>>> bd79e0e7e3f06e46ec7a04b639c36509e3411583
import { Link } from 'react-router-dom';
import BurgerNav from './BurgerNav/BurgerNav';
import './Header.css';
import logo from './logo.gif';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  let active = 'navbar-burger';

  if (showLinks === false) {
    active += ' not-active';
  } else {
    active += ' active';
  }

  return (
    <div className="header">
      <header className="header-nav">
        <div className="header-nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header-navbar">
          <ul className="header-nav-links">
            <li>
              <Link className="header-nav-links-a" to="/BlindTest/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="header-nav-links-a" to="/BlindTest/Themes">
                Thèmes
              </Link>
            </li>
            <li>
              <Link className="header-nav-links-a" to="/BlindTest/Resultats">
                Résultats
              </Link>
            </li>
            <li>
              <Link className="header-nav-links-a" to="/BlindTest/Quizz">
                Quizz
              </Link>
            </li>
          </ul>
        </nav>
        <button type="button" className={active} onClick={handleShowLinks}>
          <span className="burger-line" />
        </button>
      </header>
      <BurgerNav showLink={showLinks} />
    </div>
  );
};

export default Header;
