/* eslint-disable */
import React from 'react';
import ReactPlayer from 'react-player'
import './QuizzAudio.css';

const QuizzAudio = ({ url }) => {
  // let urlForTrack = url.slice(0, url.length - 3);
  // urlForTrack += "vtt";
  // console.log(url);
  // console.log(urlForTrack);
  return (
    <div className="audioContainer">
      <ReactPlayer url={url} controls={true} playing={true}/>
      {/* <audio
        className="audio"
        controls
        src={url}
        autoPlay
      >
        Your browser does not support the
        <code>audio</code> element.
        <track
          default
          kind="captions"
          srcLang="fr"
          src={urlForTrack}
        />
      </audio> */}
    </div>
    
  );
};

export default QuizzAudio;
