import React from 'react';
import PropTypes from 'prop-types';
import './QuizzAlbumPicture.css';

const QuizzAlbumPicture = ({ url }) => {
  console.log('re-render QuizzAlbumPicture');
  return (
    <div className="picture">
      <img src={url} alt="album currenty playing" />
    </div>
  );
};

export default QuizzAlbumPicture;

QuizzAlbumPicture.propTypes = {
  url: PropTypes.string.isRequired,
};
