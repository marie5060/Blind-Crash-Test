/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuizzAlbumPicture from './QuizzAlbumPicture';
import QuizzAudio from './QuizzAudio';
import QuizzAnswerButton from './QuizzAnswerButton';
import TimerButton from './TimerButton';
import './QuizzCard.css';

//temporary tab (waiting real answers feature)
const answers = ['fausse1', 'fausse2', 'fausse3', 'bonnereponse'];

const QuizzCard = ({ track, nextQuestion }) => {
  const [btnClicked, setBtnClicked] = useState(false);
  
  // const rightAnswer = track.title_short;
  console.log(track.title_short)
  const rightAnswer = 'bonnereponse';

  // penser à récupérer le track.length pour le random en dessous

  function shuffleArray(array2) {
    const array = array2;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const handleClick = () => {
    setBtnClicked(true);
    setTimeout(nextQuestion, 5000);
    setTimeout(() => setBtnClicked(false),5000);
  };

  if (!btnClicked) {
    shuffleArray(answers);
  }

  return (
    <div className="quizzCard">
      <div className="pictureContainer">
        <QuizzAlbumPicture url={track.album.cover_medium} />
        {btnClicked ? (
          <div className="nextTrackBg">
            <div className="nextTrackText">Morceau suivant</div>
          </div>
        ) : (
          ''
        )}
        <QuizzAudio url={track.preview} />
      </div>
      <div className="answerBtnContainer">
        <QuizzAnswerButton
          btnClicked={btnClicked}
          handleClick={handleClick}
          answer={answers[0]}
          rightAnswer={rightAnswer}
        />
        <QuizzAnswerButton
          btnClicked={btnClicked}
          handleClick={handleClick}
          answer={answers[1]}
          rightAnswer={rightAnswer}
        />
        <QuizzAnswerButton
          btnClicked={btnClicked}
          handleClick={handleClick}
          answer={answers[2]}
          rightAnswer={rightAnswer}
        />
        <QuizzAnswerButton
          btnClicked={btnClicked}
          handleClick={handleClick}
          answer={answers[3]}
          rightAnswer={rightAnswer}
          cl
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
  track: PropTypes.oneOfType([PropTypes.object]).isRequired,
  nextQuestion: PropTypes.func.isRequired,
};
