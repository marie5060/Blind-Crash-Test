<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable */
=======
/*eslint-disable */
>>>>>>> bd79e0e7e3f06e46ec7a04b639c36509e3411583
=======
>>>>>>> 938deed7bfa0a0267e8ae6b7b880656f8296e5f8
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './QuizzAudio.css';

const QuizzAudio = ({ url }) => {
  return (
    <div className="audio-container">
      <ReactPlayer url={url} controls playing volume={0.1} />
    </div>
  );
};

export default QuizzAudio;

QuizzAudio.propTypes = {
  url: PropTypes.string.isRequired,
};
