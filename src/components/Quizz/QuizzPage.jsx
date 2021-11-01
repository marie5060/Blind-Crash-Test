/* eslint-disable */
import React, { useEffect } from 'react';
import axios from 'axios';
// import LinkBtn from '../Bases/LinkBtn';
import QuizzCard from './QuizzCard';
// import QuizzScore from './QuizzScore';
import './QuizzPage.css';
import initialTracks from '../../severalTracks';

const QuizzPage = () => {
  const [tracks, setTracks] = React.useState(initialTracks);
  const random = Math.floor(Math.random() * tracks.length);

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/9631244962?' // céline dion playlist emilie
      ) // https://cors-anywhere.herokuapp.com/ à ajouter au début
      .then((response) => response.data.tracks.data)
      .then((data) => {
        setTracks(data);
        console.log("dataLength " + data.length);
        const preview = data.filter((obj) => obj.preview);
        console.log("prevLength " + preview.length);
        const title_short = data.filter((obj) => obj.title_short);
        console.log("titleLength " + title_short.length);
        const picture = data.filter((obj) => obj.album.cover_medium); 
        console.log("pictureLength " + picture.length);
      });
  }, []);

  // la bonne rep est dans track.title_short
  return (
    <main>
      <h1>Quizz</h1>
      <QuizzCard track={tracks[random]} />
      <div className="quizzBottom">
        {/* <QuizzScore /> */}
        <div className="linkBtnsContainer">
          {/* <LinkBtn />
          <LinkBtn /> */}
        </div>
      </div>
    </main>
  );
};

export default QuizzPage;
