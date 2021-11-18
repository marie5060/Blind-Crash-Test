import { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerNav from './BurgerNav/BurgerNav';
import logo from './logo.gif';
import './Header.css';

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
        <a href="/Blind-Crash-Test/" className="header-nav-logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className="header-navbar">
          <ul className="header-nav-links">
            <li>
              <Link className="header-nav-links-a" to="/Blind-Crash-Test/">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="header-nav-links-a"
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
        <button type="button" className={active} onClick={handleShowLinks}>
          <span className="burger-line" />
        </button>
      </header>
      <BurgerNav showLink={showLinks} />
    </div>
  );
};

export default Header;
