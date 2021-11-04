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
    // récupére les titles des mauvaises réponses
    const badAnswers = [];
    for (let i = 0; i < badTrackArray.length; i += 1) {
      badAnswers.push(badTrackArray[i].title_short);
    }
    // récupére le title de la bonne réponse
    const rightAnswer = goodTrack.title_short;
    // je mélange et modifie answers
    setAnswers(shuffleArray([...badAnswers, rightAnswer]));
  };

  useEffect(() => {
    creerTableauReponses();
    console.log(`réponse après mélange 1: ${answers}`);
  }, []);

  useEffect(() => {
    if (!btnClicked) {
      creerTableauReponses();
    }
    console.log(`réponse après mélange 2: ${answers}`);
  }, [btnClicked]);

  const handleClick = () => {
    setBtnClicked(true);
    setTimeout(nextQuestion, 5000);
    setTimeout(() => setBtnClicked(false), 5000);
  };

  return (
    <div className="quizzCard">
      <div className="pictureContainer">
        <QuizzAlbumPicture url={goodTrack.album.cover_medium} />
        {btnClicked ? (
          <div className="nextTrackBg">
            <div className="nextTrackText">Morceau suivant</div>
          </div>
        ) : (
          ''
        )}
        <QuizzAudio url={goodTrack.preview} />
      </div>
      <div className="answerBtnContainer">
        {/* map sur composant */}

        <QuizzAnswerButton
          btnClicked={btnClicked}
          handleClick={handleClick}
          answer={answers[0]}
          rightAnswer={theRightAnswer}
        />
        <QuizzAnswerButton
          btnClicked={btnClicked}
          handleClick={handleClick}
          answer={answers[1]}
          rightAnswer={theRightAnswer}
        />
        <QuizzAnswerButton
          btnClicked={btnClicked}
          handleClick={handleClick}
          answer={answers[2]}
          rightAnswer={theRightAnswer}
        />
        <QuizzAnswerButton
          btnClicked={btnClicked}
          handleClick={handleClick}
          answer={answers[3]}
          rightAnswer={theRightAnswer}
        />
      </div>
      <div className="timerContainer">
        <TimerButton />
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
