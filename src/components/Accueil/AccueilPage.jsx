import { useEffect } from 'react';
import PropTypes from 'prop-types';
import LinkBtnFastGame from '../Bases/LinkBtnFastGame';
import LinkBtnNewTheme from '../Bases/LinkBtnNewTheme';
import './AccueilPage.css';
import request from './request.png';

/*eslint-disable*/

const AccueilPage = ({ setChosenId, setChosenTheme, setDifficulty }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="pseudo-container">
        <h1>Bienvenue sur le Blind Crash Test!</h1>
        <div className='heroku_container'>
          <h2>Avant de jouer !</h2>
          <p>Pour activer l'accès à la bibliothèque de musique, veuillez cliquer sur</p>
          <a target="blank" href="https://cors-anywhere.herokuapp.com/corsdemo">
          ce lien
          </a>
           <p>puis sur le bouton "Request temporary access to the demo server" comme
            indiqué ci-dessous. Vous pouvez ensuite revenir sur cette fenêtre et
            lancer la partie de votre choix.
          </p>
          <img src={request} alt="request deezer" />
        </div>
      </div>
      <div className="fast-game-container">
        <div className="fast-game-container-text">
          <h1>Jouer immédiatement !</h1>
          <p>
            Envie de hasard et de tester tes connaissances, lance une partie
            aléatoire !
          </p>
        </div>
        <div className="fast-game-container-button">
          <LinkBtnFastGame
            setChosenId={setChosenId}
            setChosenTheme={setChosenTheme}
            setDifficulty={setDifficulty}
          />
        </div>
      </div>
      <div className="new-theme-container">
        <h1> Personnaliser une partie</h1>
        <p>Pour choisir ta partie, c est par ici</p>
        <LinkBtnNewTheme />
      </div>
    </main>
  );
};

export default AccueilPage;

AccueilPage.propTypes = {
  setChosenId: PropTypes.func.isRequired,
  setChosenTheme: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};
