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
  // tableau des bonnes réponses
  const [goodTracksArray, setGoodTracksArray] = useState([]);
  // la bonne réponse
  const [goodTrack, setGoodTrack] = useState();
  // tableau des mauvaises réponses
  const [badTracksArray, setBadTracksArray] = useState([]);
  /// modifie le nombre de réponse que je récupère ///
  const getBadTracks = (randomTrack, tracksAtStart = tracks) => {
    // nombre de mauvaise réponses à récupérer selon le niveau de difficulté, initialisé à 3
    let numBadAnswerToGet = 3;
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

    let badTracks = [];
    const randomsArray = [randomTrack];
    for (let i = 0; i < numBadAnswerToGet; i += 1) {
      let number = Math.floor(Math.random() * tracksAtStart.length);

      while (number === randomTrack || randomsArray.includes(number)) {
        number = Math.floor(Math.random() * tracksAtStart.length);
      }
      randomsArray.push(number);

      badTracks = [...badTracks, tracksAtStart[number]];
    }
    setBadTracksArray(badTracks);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Récupère toutes les tracks du theme choisi
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${chosenId}`
      )
      .then((response) => response.data.tracks.data)
      .then((data) => {
        const okData = data.filter(
          (track) =>
            track.album.cover_medium &&
            track.preview &&
            !track.title_short.includes('(')
        );
        setTracks(okData);
        // choisit la première chanson
        const random = Math.floor(Math.random() * okData.length);
        setGoodTrack(okData[random]);
        setGoodTracksArray([okData[random].id]);
        getBadTracks(random, okData);
      });
  }, []);

  useEffect(() => {
    let random = Math.floor(Math.random() * tracks.length);
    while (goodTracksArray.includes(tracks[random].id)) {
      random = Math.floor(Math.random() * tracks.length);
    }
    setGoodTrack(tracks[random]);
    setGoodTracksArray([...goodTracksArray, tracks[random].id]);
    getBadTracks(random, tracks);
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

  const nextQuestion = () => {
    setNbQuizz(nbQuizz + 1);
  };

  return (
    <main className="quizz-page-main">
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
          goodTrack={goodTrack}
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
