import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* eslint-disable */
// import LinkBtn from '../Bases/LinkBtn';
import QuizzCard from './QuizzCard';
// import QuizzScore from './QuizzScore';
import './QuizzPage.css';
import initialTracks from 'severalTracks';

const QuizzPage = ({chosenId}) => {

  const [tracks, setTracks] = React.useState(initialTracks);
  const [nbQuizz, setNbQuizz] = useState(1);
  const [waitingCount, setWaitingCount] = useState(5);
  const random = Math.floor(Math.random() * tracks.length);

  useEffect(() => {
    const timer =
      waitingCount > 0 &&
      setInterval(() => setWaitingCount(waitingCount - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [waitingCount]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${chosenId.themeId}?&limit=50`
      ) // https://cors-anywhere.herokuapp.com/ à ajouter au début
      .then((response) => response.data.tracks.data)
      .then((data) => setTracks(data));
  }, []);

  const nextQuestion = () => {
    setNbQuizz(nbQuizz + 1);
  };

  // la bonne rep est dans track.title_short
  return (
    <main>
      <h1>Quizz</h1>
      {waitingCount > 0 && nbQuizz === 1 ? (
        <div className="waitingContainer">
          <div className="waitingCount">{waitingCount}</div>
        </div>
      ) : (
        <QuizzCard track={tracks[random]} nextQuestion={nextQuestion} />
      )}
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
