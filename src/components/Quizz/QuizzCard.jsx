/*eslint-disable*/



import React from 'react';
import QuizzAlbumPicture from './QuizzAlbumPicture';
import QuizzAudio from './QuizzAudio';
import QuizzAnswerButton from './QuizzAnswerButton';
import TimerButton from './TimerButton';
import './QuizzCard.css';


const answers = ["fausse1", "fausse2", "fausse3", "bonnereponse"];
const QuizzCard = ({ track }) => {
   function shuffleArray(array2) {
    const array = array2;
    for (let i = array.length - 1; i > 0; i = i-1) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

  shuffleArray(answers);

  
  return (
    <div className="quizzCard">
      <div className="pictureContainer">
        <QuizzAlbumPicture url={track.album.cover_medium} />
        <QuizzAudio url={track.preview} />
      </div>
      <div className="answerBtnContainer">
        <QuizzAnswerButton answer={answers[0]} />
        <QuizzAnswerButton answer={answers[1]} />
        <QuizzAnswerButton answer={answers[2]} />
        <QuizzAnswerButton answer={answers[3]} />
      </div>
      <div className="timerContainer">
        <TimerButton />
      </div>
      
    </div>
  );
};

export default QuizzCard;
