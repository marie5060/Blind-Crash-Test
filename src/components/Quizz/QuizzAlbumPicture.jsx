/* eslint-disable */
import React from 'react';
import './QuizzAlbumPicture.css';

const QuizzAlbumPicture = ({ url }) => {
  return (
    <div className="picture">
      <img src={url} alt="album currenty playing" />
    </div>
  );
};

export default QuizzAlbumPicture;
