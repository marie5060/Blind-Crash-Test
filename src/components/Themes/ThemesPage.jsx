import { useState } from 'react';
import PropTypes from 'prop-types';
import LinkBtnGoQuizz from '../Bases/LinkBtnGoQuizz';
import ThemeItem from './ThemeItem';
import Stars from './Difficulty';
import './ThemesPage.css';

const ThemesPage = ({ setChosenId, chosenId }) => {
  const [newId, setnewId] = useState('');
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // const deleteComa = /,/gi;
  const onlyNumbers = newId
    .split('')
    .filter((e) => numbers.includes(e))
    .toString()
    .replace(/,/gi, '');

  const themeArray = [
    { name: 'Rock', id: '9626980522', num: 1 },
    { name: 'Reggae ', id: '9626990642', num: 2 },
    { name: 'Métal', id: '9626971702', num: 3 },
    { name: 'Années 70/80', id: '9640482882', num: 4 },
    { name: 'Années 90/00', id: '9640491642', num: 5 },
    { name: 'Génériques', id: '9640499662', num: 6 },
    { name: 'Chansons Paillardes', id: '9640504822', num: 7 },
    { name: 'Hymnes', id: '9640511622', num: 8 },
  ];

  const artisteArray = [
    { name: 'Céline Dion', id: '9609091082', num: 1 },
    { name: 'Johnny Halliday ', id: '9640519902', num: 2 },
    { name: 'Francis Cabrel', id: '9626952802', num: 3 },
    { name: 'Queen', id: '9640525022', num: 4 },
    { name: 'Beatles', id: '9631202962', num: 5 },
    { name: 'Daft Punk', id: '9631208562', num: 6 },
    { name: 'Metallica', id: '9640532082', num: 7 },
    { name: 'Michael Jackson', id: '9640536442', num: 8 },
  ];

  const numberStars = [1, 2, 3, 4, 5];

  return (
    <div className="themes-page-container">
      <div className="playlist-perso-container">
        <h2>Jouer avec ma propre Playlist Deezer</h2>
        <input
          type="text"
          value={newId}
          id="playlistDeezer"
          onChange={(e) => setnewId(e.target.value)}
        />
        <button type="submit" onClick={() => setChosenId(onlyNumbers)}>
          Valider
        </button>
      </div>
      <h2>Thèmes</h2>
      <div className="theme-items">
        {themeArray.map((item) => (
          <div className={`item${item.num} item`}>
            <a href="#difficulty">
              <ThemeItem
                themeName={item.name}
                themeId={item.id}
                setChosenId={setChosenId}
                chosenId={chosenId}
                key={item.num}
              />
            </a>
          </div>
        ))}
      </div>
      <h2>Artistes</h2>
      <div className="theme-items">
        {artisteArray.map((item) => (
          <div className={`item${item.num} item`}>
            <a href="#difficulty">
              <ThemeItem
                themeName={item.name}
                themeId={item.id}
                setChosenId={setChosenId}
                chosenId={chosenId}
                key={item.num}
              />
            </a>
          </div>
        ))}
      </div>
      <h2 id="difficulty">Difficulté</h2>
      <div className="difficulty-container">
        {numberStars.map((star) => (
          <Stars key={star} />
        ))}
      </div>
      <div className="go-quizz-container">
        <LinkBtnGoQuizz />
      </div>
    </div>
  );
};

export default ThemesPage;

ThemesPage.propTypes = {
  setChosenId: PropTypes.func.isRequired,
  chosenId: PropTypes.string.isRequired,
};
