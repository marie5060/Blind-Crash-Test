import React from 'react';
import PropTypes from 'prop-types';
import ThemeItem from './ThemeItem';
import './ThemesPage.css';

const ThemesPage = ({ setChosenId }) => {
  const themeArray = [
    { name: 'Rock', id: '9626980522' },
    { name: 'reggae ', id: '9626990642' },
    { name: 'Métal', id: '9626971702' },
    { name: 'Années 70/80', id: '9640482882' },
    { name: 'Années 90/00', id: '9640491642' },
    { name: 'Génériques', id: '9640499662' },
    { name: 'Chansons Paillardes', id: '9640504822' },
    { name: 'Hymnes', id: '9640511622' },
  ];

  const artisteArray = [
    { name: 'Céline Dion', id: '9609091082' },
    { name: 'Johnny Halliday ', id: '9640519902' },
    { name: 'Francis Cabrel', id: '9626952802' },
    { name: 'Queen', id: '9640525022' },
    { name: 'Beatles', id: '9631202962' },
    { name: 'Daft Punk', id: '9631208562' },
    { name: 'Metallica', id: '9640532082' },
    { name: 'Michael Jackson', id: '9640536442' },
  ];

  return (
    <div className="themes-page-container">
      <h2>Thèmes</h2>
      <div className="theme-items">
        <div className="item1 item">
          <ThemeItem
            themeName={themeArray[0].name}
            themeId={themeArray[0].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item2 item">
          <ThemeItem
            themeName={themeArray[1].name}
            themeId={themeArray[1].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item3 item">
          <ThemeItem
            themeName={themeArray[2].name}
            themeId={themeArray[2].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item4 item">
          <ThemeItem
            themeName={themeArray[3].name}
            themeId={themeArray[3].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item5 item">
          <ThemeItem
            themeName={themeArray[4].name}
            themeId={themeArray[4].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item6 item">
          <ThemeItem
            themeName={themeArray[5].name}
            themeId={themeArray[5].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item7 item">
          <ThemeItem
            themeName={themeArray[6].name}
            themeId={themeArray[6].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item8 item">
          <ThemeItem
            themeName={themeArray[7].name}
            themeId={themeArray[7].id}
            setChosenId={setChosenId}
          />
        </div>
      </div>
      <h2>Artistes</h2>
      <div className="theme-items">
        <div className="item1 item">
          <ThemeItem
            themeName={artisteArray[0].name}
            themeId={artisteArray[0].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item2 item">
          <ThemeItem
            themeName={artisteArray[1].name}
            themeId={artisteArray[1].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item3 item">
          <ThemeItem
            themeName={artisteArray[2].name}
            themeId={artisteArray[2].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item4 item">
          <ThemeItem
            themeName={artisteArray[3].name}
            themeId={artisteArray[3].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item5 item">
          <ThemeItem
            themeName={artisteArray[4].name}
            themeId={artisteArray[4].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item6 item">
          <ThemeItem
            themeName={artisteArray[5].name}
            themeId={artisteArray[5].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item7 item">
          <ThemeItem
            themeName={artisteArray[6].name}
            themeId={artisteArray[6].id}
            setChosenId={setChosenId}
          />
        </div>
        <div className="item8 item">
          <ThemeItem
            themeName={artisteArray[7].name}
            themeId={artisteArray[7].id}
            setChosenId={setChosenId}
          />
        </div>
      </div>
      <h2>Difficulté</h2>
    </div>
  );
};

export default ThemesPage;

ThemesPage.propTypes = {
  setChosenId: PropTypes.func.isRequired,
};
