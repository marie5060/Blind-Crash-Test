/*eslint-disable*/



import React, { useState } from 'react';
import QuizzAlbumPicture from './QuizzAlbumPicture';
import QuizzAudio from './QuizzAudio';
import QuizzAnswerButton from './QuizzAnswerButton';
import TimerButton from './TimerButton';
import './QuizzCard.css';


const answers = ["fausse1", "fausse2", "fausse3", "bonnereponse"];
const QuizzCard = ({ track }) => {

  const [btnClicked, setBtnClicked] = useState(false);

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

  // const rightAnswer = track.title_short;
  const rightAnswer = "bonnereponse"

  const handleClicked = () => {
    setBtnClicked(true);
  }
  
  return (
    <div className="quizzCard">
      <div className="pictureContainer">
        <QuizzAlbumPicture url={track.album.cover_medium} />
        <QuizzAudio url={track.preview} />
      </div>
      <div className="answerBtnContainer">
        <QuizzAnswerButton btnClicked={btnClicked} handleClicked={handleClicked} answer={answers[0]} rightAnswer={rightAnswer} />
        <QuizzAnswerButton btnClicked={btnClicked} handleClicked={handleClicked} answer={answers[1]} rightAnswer={rightAnswer}  />
        <QuizzAnswerButton btnClicked={btnClicked} handleClicked={handleClicked} answer={answers[2]} rightAnswer={rightAnswer}  />
        <QuizzAnswerButton btnClicked={btnClicked} handleClicked={handleClicked} answer={answers[3]} rightAnswer={rightAnswer}  />
      </div>
      <TimerButton />
    </div>
  );
};

export default QuizzCard;
