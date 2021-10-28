import React, { useEffect } from 'react';
import axios from 'axios';
import QuizzCard from '../Quizz/QuizzCard';
import QuizzScore from '../Quizz/QuizzScore';
import LinkBtn from '../Bases/LinkBtn';
import './QuizzPage.css';
import initialTracks from '../../severalTracks';

const QuizzPage = () => {
  const [tracks, setTracks] = React.useState(initialTracks);
  let random = Math.floor(Math.random() * tracks.length);
  console.log(random);

  useEffect(() => {

    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/9609091082?&limit=25' // céline dion playlist emilie
      ) //https://cors-anywhere.herokuapp.com/ à ajouter au début 
      .then((response) => response.data.tracks.data)
      .then((data) => setTracks(data));
  }, []);

  //la bonne rep est dans track.title_short
  return (
    <main>
      <h1>Quizz</h1>
      <QuizzCard track={tracks[random]} />
      <div className="quizzBottom">
        <QuizzScore />
        <div className="linkBtnsContainer">
          <LinkBtn />
          <LinkBtn />
        </div>
      </div>
    </main>
  );
};

export default QuizzPage;
