import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BurgerNav.css';

const BurgerNav = ({ showLink }) => {
  let hideLink = 'header-navbar-burger';

  if (showLink === false) {
    hideLink += ' hide-links';
  } else {
    hideLink += ' show-link';
  }

  return (
    <nav className={hideLink}>
      <ul className="header-navbar-burger-links">
        <li>
          <Link className="header-navbar-burger-links-a" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="header-navbar-burger-links-a" to="/Themes">
            Thèmes
          </Link>
        </li>
        <li>
          <Link className="header-navbar-burger-links-a" to="/Resultats">
            Résultats
          </Link>
        </li>
        <li>
          <Link className="header-navbar-burger-links-a" to="/Quizz">
            Quizz
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerNav;

BurgerNav.propTypes = {
  showLink: PropTypes.oneOfType([PropTypes.bool]).isRequired,
};
