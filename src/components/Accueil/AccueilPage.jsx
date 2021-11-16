import PropTypes from 'prop-types';
import LinkBtnFastGame from '../Bases/LinkBtnFastGame';
import LinkBtnNewTheme from '../Bases/LinkBtnNewTheme';
import './AccueilPage.css';

const AccueilPage = ({ setChosenId, setChosenTheme }) => {
  return (
    <main>
      <div className="pseudo-container">
        <h1>Choisis ton pseudo avant de lancer ta partie</h1>
        <form className="form-container">
          <input className="pseudo-input" type="text" placeholder="Pseudo" />
        </form>
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
          />
        </div>
      </div>
      <div className="new-theme-container">
        <h1> Personnaliser une partie</h1>
        <p>Pour choisir ta partie c est par ici !!</p>
        <LinkBtnNewTheme />
      </div>
    </main>
  );
};

export default AccueilPage;

AccueilPage.propTypes = {
  setChosenId: PropTypes.func.isRequired,
  setChosenTheme: PropTypes.func.isRequired,
};
