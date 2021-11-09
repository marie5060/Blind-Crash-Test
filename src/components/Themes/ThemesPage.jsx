import React from 'react';
import PropTypes from 'prop-types';
import ThemeItem from './ThemeItem';
import './ThemesPage.css';

const ThemesPage = ({ setChosenId }) => {
  const themeArray = [
    { name: 'Rock', id: '9626980522', num: 0 },
    { name: 'reggae ', id: '9626990642', num: 1 },
    { name: 'Métal', id: '9626971702', num: 2 },
    { name: 'Années 70/80', id: '9640482882', num: 3 },
    { name: 'Années 90/00', id: '9640491642', num: 4 },
    { name: 'Génériques', id: '9640499662', num: 5 },
    { name: 'Chansons Paillardes', id: '9640504822', num: 6 },
    { name: 'Hymnes', id: '9640511622', num: 7 },
  ];

  const artisteArray = [
    { name: 'Céline Dion', id: '9626980522', num: 0 },
    { name: 'Johnny Halliday ', id: '9626990642', num: 1 },
    { name: 'Francis Cabrel', id: '9626971702', num: 2 },
    { name: 'Queen', id: '9640482882', num: 3 },
    { name: 'Beatles', id: '9640491642', num: 4 },
    { name: 'Daft Punk', id: '9640499662', num: 5 },
    { name: 'Metallica', id: '9640504822', num: 6 },
    { name: 'Michael Jackson', id: '9640511622', num: 7 },
  ];

  return (
    <div className="ThemesPage-Container">
      <h2>Thèmes</h2>
      <div className="themeItems">
        {themeArray.map((item) => (
          <div className={`item${item.num} item`}>
            <ThemeItem
              themeName={item.name}
              themeId={item.id}
              setChosenId={setChosenId}
              key={item.num}
            />
          </div>
        ))}
      </div>
      <h2>Artistes</h2>
      <div className="themeItems">
        {artisteArray.map((item) => (
          <div className={`item${item.num} item`}>
            <ThemeItem
              themeName={item.name}
              themeId={item.id}
              setChosenId={setChosenId}
              key={item.num}
            />
          </div>
        ))}
      </div>
      <h2>Difficulté</h2>
    </div>
  );
};

export default ThemesPage;

ThemesPage.propTypes = {
  setChosenId: PropTypes.func.isRequired,
};
