import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuizzAlbumPicture from './QuizzAlbumPicture';
import QuizzAudio from './QuizzAudio';
import QuizzAnswerButton from './QuizzAnswerButton';
import TimerButton from './TimerButton';
import './QuizzCard.css';

const QuizzCard = ({
  goodTrack,
  badTrackArray,
  nextQuestion,
  setCurrentScore,
}) => {
  // Le bouton a été cliqué
  const [btnClicked, setBtnClicked] = useState(false);
  // tableau de réponses
  const [answers, setAnswers] = useState([]);
  // Le joueur a gagné / perdu
  const [win, setWin] = useState(false);
  // temps restant lors du click
  const [leftTimeWhenClick, setLeftTimeWhenClick] = useState(100);
  // Bonne réponse
  const theRightAnswer = goodTrack.title_short;

  let answerList = [];

  // Fonction de mélange des réponses
  const shuffleArray = (array2) => {
    const array = array2;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  // Génère un tableau de 4 réponses et les
  const creerTableauReponses = () => {
    // récupére le title de la bonne réponse
    answerList = [
      {
        title_short: goodTrack.title_short,
        id: goodTrack.id,
      },
    ];
    for (let i = 0; i < badTrackArray.length; i += 1) {
      answerList.push({
        title_short: badTrackArray[i].title_short,
        id: badTrackArray[i].id,
      });
    }
    // je mélange et modifie answers
    setAnswers(shuffleArray(answerList));
  };

  useEffect(() => {
    if (!btnClicked) {
      creerTableauReponses();
    } else {
      setTimeout(() => {
        nextQuestion();
        setBtnClicked(false);
        setWin(false);
      }, 3000);
      // setTimeout(nextQuestion, 3000);
      // setTimeout(() => setBtnClicked(false), 3000);
      // setTimeout(() => setWin(false), 3000);
    }
  }, [btnClicked]);

  // useEffect(() => {
  //   creerTableauReponses();
  // }, [answers]);

  useEffect(() => {
    if (win) {
      setCurrentScore(parseInt(leftTimeWhenClick.toFixed(0), 10));
    } else {
      setCurrentScore(0);
    }
  }, [win]);

  const handleClick = () => {
    setBtnClicked(true);
  };

  return (
    <div className="quizz-card">
      <div className="picture-container">
        <QuizzAlbumPicture url={goodTrack.album.cover_medium} />

        <button type="button" onClick={handleClick} className="next-track-bg">
          <div className="next-track-text">Morceau suivant</div>
          {btnClicked ? <div className="next-track-animation" /> : null}
        </button>

        <QuizzAudio url={goodTrack.preview} />
      </div>
      <div className="answer-btn-container">
        {answers.map((answer) => (
          <QuizzAnswerButton
            btnClicked={btnClicked}
            handleClick={handleClick}
            setWin={setWin}
            answer={answer.title_short}
            rightAnswer={theRightAnswer}
            key={answer.id}
          />
        ))}
      </div>
      <div className="timer-container">
        <TimerButton
          btnClicked={btnClicked}
          setLeftTimeWhenClick={setLeftTimeWhenClick}
          setBtnClicked={setBtnClicked}
        />
      </div>
    </div>
  );
};

export default QuizzCard;

QuizzCard.propTypes = {
  goodTrack: PropTypes.oneOfType([PropTypes.object]).isRequired,
  badTrackArray: PropTypes.oneOfType([PropTypes.array]).isRequired,
  nextQuestion: PropTypes.func.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
};
