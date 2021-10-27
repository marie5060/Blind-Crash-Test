import React from 'react';
import QuizzAlbumPicture from './QuizzAlbumPicture';
import QuizzAudio from './QuizzAudio';
import QuizzAnswerButton from './QuizzAnswerButton';

const QuizzCard = () => {
  return (
    <div>
      <QuizzAlbumPicture />
      <QuizzAudio />
      <div>
        <QuizzAnswerButton />
        <QuizzAnswerButton />
        <QuizzAnswerButton />
        <QuizzAnswerButton />
      </div>
    </div>
  );
};

export default QuizzCard;
