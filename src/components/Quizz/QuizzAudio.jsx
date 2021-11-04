import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './QuizzAudio.css';

const QuizzAudio = ({ url }) => {
  return (
    <div className="audioContainer">

      <ReactPlayer url={url} controls playing volume={0.1} />

    </div>
  );
};

export default QuizzAudio;

QuizzAudio.propTypes = {
  url: PropTypes.string.isRequired,
};
