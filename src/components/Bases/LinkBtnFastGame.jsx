import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './linkBtnFastGame.css';

const LinkBtnFastGame = ({ setChosenId, setChosenTheme, setDifficulty }) => {
  const themeArray = [
    { name: 'Rock', id: '9626980522' },
    { name: 'Reggae ', id: '9626990642' },
    { name: 'Métal', id: '9626971702' },
    { name: 'Années 70/80', id: '9640482882' },
    { name: 'Années 90/00', id: '9640491642' },
    { name: 'Génériques', id: '9640499662' },
    { name: 'Chansons Paillardes', id: '9640504822' },
    { name: 'Hymnes', id: '9640511622' },
    { name: 'Céline Dion', id: '9609091082' },
    { name: 'Johnny Halliday ', id: '9640519902' },
    { name: 'Francis Cabrel', id: '9626952802' },
    { name: 'Queen', id: '9640525022' },
    { name: 'Beatles', id: '9631202962' },
    { name: 'Daft Punk', id: '9631208562' },
    { name: 'Metallica', id: '9640532082' },
    { name: 'Michael Jackson', id: '9640536442' },
  ];

  const randomPlaylist = () => {
    const random = Math.floor(Math.random() * themeArray.length);
    setChosenId(themeArray[random].id);
    setChosenTheme(themeArray[random].name);
    setDifficulty(2);
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
  setChosenTheme: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};
