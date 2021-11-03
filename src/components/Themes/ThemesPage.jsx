import React, { useEffect } from 'react';
import axios from 'axios';
import ThemeItem from './ThemeItem';
import './ThemesPage.css';
import initialTracks from '../../severalTracks';

const ThemesPage = () => {

  const themeArray = [
    { name: 'Rock', id: '9626980522' },
    { name: 'Rap', id: '9631244962' },
    { name: 'Electro', id: '9631244962' },
    { name: 'Générique TV FILM', id: '9631244962' },
    { name: "70's / 80's", id: '9631244962' },
    { name: 'Métal', id: '9631244962' },
    { name: 'Dessins animés', id: '9631244962' },
    { name: 'Pop', id: '9631244962' },
  ];

  const [indexArray, setIndexArray] = useState(0);
  // const [indexPlaylist, setIndexPlaylist] = React.useState(0);
  const [tracks, setTracks] = React.useState(initialTracks);

  // const random = Math.floor(Math.random() * tracks.length);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${themeArray[indexArray].id}?&limit=50`
      ) // https://cors-anywhere.herokuapp.com/ à ajouter au début
      .then((response) => response.data.tracks.data)
      .then((data) => setTracks(data));
  }, []);

  return (
    <div className="ThemesPage-Container">
      <h2>Thèmes</h2>
      <div className="themeItems">
        <div className="item1 item">
          <ThemeItem 
          themeName={themeArray[0].name} 
          />
        </div>
        <div className="item2 item">
          <ThemeItem themeName={themeArray[1].name} />
        </div>
        <div className="item3 item">
          <ThemeItem themeName={themeArray[2].name} />
        </div>
        <div className="item4 item">
          <ThemeItem themeName={themeArray[3].name} />
        </div>
        <div className="item5 item">
          <ThemeItem themeName={themeArray[4].name} />
        </div>
        <div className="item6 item">
          <ThemeItem themeName={themeArray[5].name} />
        </div>
        <div className="item7 item">
          <ThemeItem themeName={themeArray[6].name} />
        </div>
        <div className="item8 item">
          <ThemeItem themeName={themeArray[7].name} />
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
