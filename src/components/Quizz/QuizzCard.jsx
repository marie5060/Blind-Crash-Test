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
  const [btnClicked, setBtnClicked] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [win, setWin] = useState(false);
  const [leftTimeWhenClick, setLeftTimeWhenClick] = useState(100);
  const theRightAnswer = goodTrack.title_short;
  console.log(`dans quizz card btnClicked: ${btnClicked}`);
  console.log(`dans quizz card win: ${win}`);

  function shuffleArray(array2) {
    const array = array2;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const creerTableauReponses = () => {
    // récupére le title de la bonne réponse
    const answerList = [
      {
        title_short: goodTrack.title_short,
        id: goodTrack.id,
      },
    ];

    // récupére les titles des mauvaises réponses
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
    console.log('autreUsEffect creer tableau');
    creerTableauReponses();
  }, []);

  useEffect(() => {
    if (!btnClicked) {
      console.log(
        `dans useEffect quizzCard, ds !btnCkicked, creerTableau: ${btnClicked}`
      );
      creerTableauReponses();
    } else {
      setTimeout(nextQuestion, 3000);
      setTimeout(() => setBtnClicked(false), 3000);
      setTimeout(() => setWin(false), 3000);
    }
  }, [btnClicked]);

  const handleClick = () => {
    setBtnClicked(true);
  };

  useEffect(() => {
    if (win) {
      console.log(`score:${parseInt(leftTimeWhenClick.toFixed(0), 10)}`);
      setCurrentScore(parseInt(leftTimeWhenClick.toFixed(0), 10));
    } else {
      setCurrentScore(0);
    }
  }, [win]);

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
