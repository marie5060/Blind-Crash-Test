/* eslint-disable */
import React from 'react';
import ReactPlayer from 'react-player'
import './QuizzAudio.css';

const QuizzAudio = ({ url }) => {
  return (
    <div className="audioContainer">
      <ReactPlayer url={url} controls={true} playing={true}/>
    </div>
    
  );
};

export default QuizzAudio;
