import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuizzAlbumPicture from './QuizzAlbumPicture';
import QuizzAudio from './QuizzAudio';
import QuizzAnswerButton from './QuizzAnswerButton';
import TimerButton from './TimerButton';
import './QuizzCard.css';
import interrogation from './interrogation.png';

const QuizzCard = ({ goodTrack, badTrackArray, nextQuestion, difficulty }) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [answers, setAnswers] = useState([]);

  // temporary tab (waiting real answers feature)
  const [leftTimeWhenClick, setLeftTimeWhenClick] = useState(100);
  console.log(leftTimeWhenClick);
  // console.log pour éviter erreur eslint (en attendant pouvoir utiliser leftTimeWhenClick pour calcul score)
  const theRightAnswer = goodTrack.title_short;

  // image afficher  initialisé à la cover du morceau
  let coverImage = goodTrack.album.cover_medium;

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
    } else {
      setTimeout(nextQuestion, 3000);
      setTimeout(() => setBtnClicked(false), 3000);
    }
  }, [btnClicked]);

  const handleClick = () => {
    setBtnClicked(true);
  };

  // si la difficulté >= 3 change l'image pour afficher point d'interrogation
  if (difficulty >= 3) {
    coverImage = interrogation;
  }

  return (
    <div className="quizz-card">
      <div className="picture-container">
        <div className="picture-container-image">
          <QuizzAlbumPicture url={coverImage} />
        </div>
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
            answer={answer.title_short}
            rightAnswer={theRightAnswer}
            difficulty={difficulty}
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
  difficulty: PropTypes.oneOfType([PropTypes.number]).isRequired,
};
