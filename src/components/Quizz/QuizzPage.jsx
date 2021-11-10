import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import LinkBtn from '../Bases/LinkBtn';
import initialTracks from '../../severalTracks';
import QuizzCard from './QuizzCard';
import QuizzScore from './QuizzScore';
import './QuizzPage.css';

const QuizzPage = ({ chosenId }) => {
  // tableau de chansons
  const [tracks, setTracks] = useState(initialTracks);
  // Compteur de question
  const [nbQuizz, setNbQuizz] = useState(1);
  // Compteur de 3s avant de commancer le jeu
  const [waitingCount, setWaitingCount] = useState(3);
  // Score actuel du joueur
  const [currentScore, setCurrentScore] = useState(0);

  const [random, setRandom] = useState(0);

  const badTracksArray = [];

  useEffect(() => {
    setRandom(Math.floor(Math.random() * tracks.length));
    console.log('random');
    // Remplir les 4 réponses
  }, [nbQuizz]);

  // Timer 3 - 2 - 1 quizz start
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
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${chosenId}`
      ) // https://cors-anywhere.herokuapp.com/ à ajouter au début
      .then((response) => response.data.tracks.data)
      .then((data) => {
        const okData = data.filter(
          (track) =>
            track.album.cover_medium &&
            track.preview &&
            !track.title_short.includes('(')
        );
        setTracks(okData);
      });
    console.log('appel axios');
  }, [chosenId]);

  for (let i = 0; i < 3; i += 1) {
    let number = Math.floor(Math.random() * tracks.length);
    while (
      tracks[number].id === tracks[random].id ||
      badTracksArray.includes(tracks[number])
    ) {
      number = Math.floor(Math.random() * tracks.length);
    }
    badTracksArray.push(tracks[number]);
  }

  const nextQuestion = () => {
    setNbQuizz(nbQuizz + 1);
  };

  return (
    <main>
      <div className="topQuizz">
        <div>
          Score : <QuizzScore currentScore={currentScore} nbQuizz={nbQuizz} />
        </div>
        <div>{nbQuizz} / 10</div>
      </div>
      {waitingCount > 0 && nbQuizz === 1 ? (
        <div className="waiting-container">
          <div className="waiting-count">{waitingCount}</div>
        </div>
      ) : (
        <QuizzCard
          goodTrack={tracks[random]}
          badTrackArray={badTracksArray}
          nextQuestion={nextQuestion}
          setCurrentScore={setCurrentScore}
        />
      )}
      <div className="quizz-bottom">
        <div className="link-btns-container">
          {/* <LinkBtn />
          <LinkBtn /> */}
        </div>
      </div>
    </main>
  );
};

export default QuizzPage;

QuizzPage.propTypes = {
  chosenId: PropTypes.string.isRequired,
};
