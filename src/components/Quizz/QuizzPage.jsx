import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import initialTracks from '../../severalTracks';
import QuizzCard from './QuizzCard';
import QuizzScore from './QuizzScore';
import './QuizzPage.css';

const QuizzPage = ({ chosenId, chosenTheme, pseudo, difficulty }) => {
  // Le bouton a été cliqué
  const [btnClicked, setBtnClicked] = useState(false);
  // tableau de chansons
  const [tracks, setTracks] = useState(initialTracks);
  // Compteur de question
  const [nbQuizz, setNbQuizz] = useState(1);
  // Compteur de 3s avant de commancer le jeu
  const [waitingCount, setWaitingCount] = useState(3);
  // Score du quizz qui se met à jour au fur et à mesure
  const [currentScore, setCurrentScore] = useState(0);

  const [random, setRandom] = useState(0);
  // difficulté choisie sur PageThème dans la props "difficulty"
  // nombre de mauvaise réponses à récupérer selon le niveau de difficulté, initialisé à 3
  let numBadAnswerToGet = 3;

  const badTracksArray = [];

  useEffect(() => {
    setRandom(Math.floor(Math.random() * tracks.length));
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
  }, [chosenId]);

  const nextQuestion = () => {
    setNbQuizz(nbQuizz + 1);
  };

  // change le nombre de mauvaise réponse à récupérer selon le niveau de difficulté
  switch (difficulty) {
    case 1:
      numBadAnswerToGet = 1;
      break;
    case 2:
      numBadAnswerToGet = 3;
      break;
    case 3:
      numBadAnswerToGet = 3;
      break;
    case 4:
      numBadAnswerToGet = 5;
      break;
    case 5:
      numBadAnswerToGet = 7;
      break;
    default:
      numBadAnswerToGet = 3;
      break;
  }

  // récupére un tableau d'objet de mauvaises réponses
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
      <div className="topQuizz">
        <div>
          Score :{' '}
          <QuizzScore
            currentScore={currentScore}
            chosenTheme={chosenTheme}
            nbQuizz={nbQuizz}
            btnClicked={btnClicked}
            difficulty={difficulty}
            pseudo={pseudo}
          />
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
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          difficulty={difficulty}
          nbQuizz={nbQuizz}
          btnClicked={btnClicked}
          setBtnClicked={setBtnClicked}
          chosenTheme={chosenTheme}
          pseudo={pseudo}
        />
      )}
    </main>
  );
};

export default QuizzPage;

QuizzPage.propTypes = {
  chosenId: PropTypes.string.isRequired,
  chosenTheme: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
};
