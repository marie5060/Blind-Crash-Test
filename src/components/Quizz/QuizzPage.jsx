import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import LinkBtn from '../Bases/LinkBtn';
import initialTracks from '../../severalTracks';
import QuizzCard from './QuizzCard';
// import QuizzScore from './QuizzScore';
import './QuizzPage.css';

const QuizzPage = ({ chosenId }) => {
  const [tracks, setTracks] = useState(initialTracks);
  const [nbQuizz, setNbQuizz] = useState(1);
  const [waitingCount, setWaitingCount] = useState(3);

  // difficulté choisie sur PageThème
  const difficulty = 4;
  // nombre de mauvaise réponses à récupérer selon le niveau de difficulté, initialisé à 3
  let numBadAnswerToGet = 3;

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
        const okData = data.filter(
          (track) =>
            track.album.cover_medium &&
            track.preview &&
            !track.title_short.includes('(')
        );
        setTracks(okData);
      });
  }, [chosenId]);

  const nextQuestion = () => {
    setNbQuizz(nbQuizz + 1);
  };

  // change le nombre de mauvaise réponse à récupérer selon le niveau de difficulté
  if (difficulty === 1) {
    numBadAnswerToGet = 1;
  } else if (difficulty === 4) {
    numBadAnswerToGet = 5;
  } else if (difficulty === 5) {
    numBadAnswerToGet = 7;
  }

  // récupére un tableau d'objet de mauvaises réponses
  const badTracksArray = [];
  /// modifie le nombre de réponse que je récupère ///
  for (let i = 0; i < numBadAnswerToGet; i += 1) {
    let number = Math.floor(Math.random() * tracks.length);
    while (
      tracks[number].id === tracks[random].id ||
      badTracksArray.includes(tracks[number])
    ) {
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
          difficulty={difficulty}
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

QuizzPage.propTypes = {
  chosenId: PropTypes.oneOfType([PropTypes.number]).isRequired,
};
