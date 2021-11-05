import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* eslint-disable */
// import LinkBtn from '../Bases/LinkBtn';
import QuizzCard from './QuizzCard';
// import QuizzScore from './QuizzScore';
import './QuizzPage.css';
import initialTracks from 'severalTracks';

const QuizzPage = ({chosenId}) => {

  const [tracks, setTracks] = useState(initialTracks);
  const [nbQuizz, setNbQuizz] = useState(1);
  const [waitingCount, setWaitingCount] = useState(5);

  const random = Math.floor(Math.random() * tracks.length); 

  // Timer
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
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${chosenId}?&limit=50`
      ) // https://cors-anywhere.herokuapp.com/ à ajouter au début
      .then((response) => response.data.tracks.data)
      .then((data) => {
        const okData = data.filter((track) => track.album.cover_medium && track.preview && !(track.title_short).includes('('));
        setTracks(okData);
      });
  }, []);

  const nextQuestion = () => {
    setNbQuizz(nbQuizz + 1);
  };

  // récupére un tableau d'objet de mauvaises réponses
  const badTracksArray = [];
  for (let i = 0; i < 3; i += 1) {
    let number = Math.floor(Math.random() * tracks.length);
    const numbersArray = [];
    numbersArray.push(number);
    while (number === random || numbersArray.includes(number)) {
      number = Math.floor(Math.random() * tracks.length);
    }
    badTracksArray.push(tracks[number]);
  }
  
  return (
    <main>
      <h1>Quizz</h1>
      {waitingCount > 0 && nbQuizz === 1 ? (
        <div className="waiting-container">
          <div className="waiting-count">{waitingCount}</div>
        </div>
      ) : (
        <QuizzCard
          goodTrack={tracks[random]}
          badTrackArray={badTracksArray}
          nextQuestion={nextQuestion}
        />
      )}
      <div className="quizz-bottom">
        {/* <QuizzScore /> */}
        <div className="link-btns-container">
          {/* <LinkBtn />
          <LinkBtn /> */}
        </div>
      </div>
    </main>
  );
};

export default QuizzPage;
