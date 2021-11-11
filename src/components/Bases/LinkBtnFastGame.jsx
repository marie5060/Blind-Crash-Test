import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './linkBtnFastGame.css';

const LinkBtnFastGame = ({ setChosenId }) => {
  const numberPlaylists = [
    '9626980522',
    '9626990642',
    '9626971702',
    '9640482882',
    '9640491642',
    '9640499662',
    '9640504822',
    '9640511622',
    '9609091082',
    '9640519902',
    '9626952802',
    '9640525022',
    '9631202962',
    '9631208562',
    '9640532082',
    '9640536442',
  ];

  const randomPlaylist = () => {
    setChosenId(
      numberPlaylists[Math.floor(Math.random() * numberPlaylists.length)]
    );
  };

  return (
    <div>
      <Link to="/Blind-Crash-Test/Quizz">
        <button type="button" className="fast-game" onClick={randomPlaylist}>
          Partie Rapide
        </button>
      </Link>
    </div>
  );
};

export default LinkBtnFastGame;

LinkBtnFastGame.propTypes = {
  setChosenId: PropTypes.func.isRequired,
};
