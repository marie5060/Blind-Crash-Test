import PropTypes from 'prop-types';
import LinkBtnFastGame from '../Bases/LinkBtnFastGame';
import LinkBtnNewTheme from '../Bases/LinkBtnNewTheme';
import './AccueilPage.css';

const AccueilPage = ({ setChosenId, setChosenTheme, setDifficulty }) => {
  return (
    <main>
      <div className="pseudo-container">
        <h1>Choisis ton pseudo avant de lancer ta partie</h1>
        <form>
          <input className="pseudo-input" type="text" placeholder="Pseudo" />
        </form>
      </div>
      <div className="fast-game-container">
        <div>
          <h1>Jouer immédiatement !</h1>
          <p>
            Envie de hasard et de tester tes connaissances, lance une partie
            aléatoire !
          </p>
        </div>
        <LinkBtnFastGame
          setChosenId={setChosenId}
          setChosenTheme={setChosenTheme}
          setDifficulty={setDifficulty}
        />
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
  setDifficulty: PropTypes.func.isRequired,
};
