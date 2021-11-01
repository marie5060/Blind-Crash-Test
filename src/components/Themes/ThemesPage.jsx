import React from 'react';
import ThemeItem from './ThemeItem';
import './ThemesPage.css';

const ThemesPage = () => {
  const themeArray = [
    { name: 'Rock', picture: './image_theme' },
    // {name :'Rap', picture : './image_theme'},
    // {name :'Electro', picture : './image_theme'},
    // {name :'Générique', picture : './image_theme'},
    // {name : "70's / 80's", picture : './image_theme'},
    // {name : 'Métal', picture : './image_theme'},
    // {name : 'Beauf', picture : './image_theme'},
    // {name : 'Pop', picture : './image_theme'}
  ];

  return (
    <div className="ThemesPage-Container">
      <h2>Thèmes</h2>
      <div className="themeItems">
        <div className="item1 item">
          <ThemeItem themeName={themeArray[0].name} />
        </div>
        <div className="item2 item">
          <ThemeItem />
        </div>
        <div className="item3 item">
          <ThemeItem />
        </div>
        <div className="item4 item">
          <ThemeItem />
        </div>
        <div className="item5 item">
          <ThemeItem />
        </div>
        <div className="item6 item">
          <ThemeItem />
        </div>
        <div className="item7 item">
          <ThemeItem />
        </div>
        <div className="item8 item">
          <ThemeItem />
        </div>
      </div>
      <h2>Artistes</h2>
      <div className="themeItems">
        <div className="item1 item">
          <ThemeItem />
        </div>
        <div className="item2 item">
          <ThemeItem />
        </div>
        <div className="item3 item">
          <ThemeItem />
        </div>
        <div className="item4 item">
          <ThemeItem />
        </div>
        <div className="item5 item">
          <ThemeItem />
        </div>
        <div className="item6 item">
          <ThemeItem />
        </div>
        <div className="item7 item">
          <ThemeItem />
        </div>
        <div className="item8 item">
          <ThemeItem />
        </div>
      </div>
      <h2>Difficulté</h2>
    </div>
  );
};

export default ThemesPage;
