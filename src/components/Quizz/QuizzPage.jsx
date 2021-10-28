import LinkBtn from '../Bases/LinkBtn';
import React, { useEffect } from 'react';
import axios from 'axios';
import QuizzCard from './QuizzCard';
// import QuizzScore from './QuizzScore';
// import LinkBtn from '../Bases/LinkBtn';
import './QuizzPage.css';
import initialTracks from '../../severalTracks';

const QuizzPage = () => {
  return (
    <div className="QuizzPage-Container">
      <LinkBtn />
    </div>

const QuizzPage = () => {
  const [tracks, setTracks] = React.useState(initialTracks);
  const random = Math.floor(Math.random() * tracks.length);
  console.log(random);

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/9609091082?&limit=25' // céline dion playlist emilie
      ) // https://cors-anywhere.herokuapp.com/ à ajouter au début
      .then((response) => response.data.tracks.data)
      .then((data) => setTracks(data));
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
