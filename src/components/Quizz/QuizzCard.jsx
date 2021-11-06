import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuizzAlbumPicture from './QuizzAlbumPicture';
import QuizzAudio from './QuizzAudio';
import QuizzAnswerButton from './QuizzAnswerButton';
import TimerButton from './TimerButton';
import './QuizzCard.css';

const QuizzCard = ({ goodTrack, badTrackArray, nextQuestion }) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [leftTimeWhenClick, setLeftTimeWhenClick] = useState(100);
  // console.log pour éviter erreur eslint (en attendant pouvoir utiliser leftTimeWhenClick pour calcul score)
  console.log(`${leftTimeWhenClick.toFixed(0)}%`);
  const theRightAnswer = goodTrack.title_short;

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
    creerTableauReponses();
  }, []);

  useEffect(() => {
    if (!btnClicked) {
      creerTableauReponses();
    }
  }, [btnClicked]);

  const handleClick = () => {
    setBtnClicked(true);
    setTimeout(nextQuestion, 3000);
    setTimeout(() => setBtnClicked(false), 3000);
  };

  return (
    <div className="quizz-card">
      <div className="picture-container">
        <QuizzAlbumPicture url={goodTrack.album.cover_medium} />
        {btnClicked ? (
          <div className="next-track-bg">
            <div className="next-track-text">Morceau suivant</div>
          </div>
        ) : (
          ''
        )}
        <QuizzAudio url={goodTrack.preview} />
      </div>
      <div className="answer-btn-container">
        {answers.map((answer) => (
          <QuizzAnswerButton
            btnClicked={btnClicked}
            handleClick={handleClick}
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
};
