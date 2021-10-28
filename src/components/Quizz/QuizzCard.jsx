/* eslint-disable */
import React from 'react';
import QuizzAlbumPicture from './QuizzAlbumPicture';
import QuizzAudio from './QuizzAudio';
import QuizzAnswerButton from './QuizzAnswerButton';
import TimerButton from './TimerButton';
import './QuizzCard.css';

const QuizzCard = ({ track }) => {
  return (
    <div className="quizzCard">
      <div className="pictureContainer">
        <QuizzAlbumPicture url={track.album.cover_medium} />
        <QuizzAudio url={track.preview} />
      </div>
      <div className="answerBtnContainer">
        {/* <QuizzAnswerButton />  //la bonne rep est dans track.title_short */}
        <QuizzAnswerButton />
        <QuizzAnswerButton />
        <QuizzAnswerButton />
      </div>
      <TimerButton />
    </div>
  );
};

export default QuizzCard;
