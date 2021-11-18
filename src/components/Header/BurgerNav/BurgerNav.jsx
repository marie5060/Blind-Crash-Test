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
          <Link
            className="header-navbar-burger-links-a"
            to="/Blind-Crash-Test/"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className="header-navbar-burger-links-a"
            to="/Blind-Crash-Test/Themes"
          >
            Thèmes
          </Link>
        </li>
        <li>
          <Link
            className="header-nav-links-a"
            to={{
              pathname: '/Blind-Crash-Test/Resultats',
              state: {
                currentScore: null,
                pseudo: null,
                chosenTheme: null,
                difficulty: null,
              },
            }}
          >
            Résultats
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
