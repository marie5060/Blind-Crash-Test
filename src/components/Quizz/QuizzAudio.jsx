import React from 'react';

const QuizzAudio = () => {
  return (
    <div className="audioContainer">
      <audio
        className="audio"
        controls
        src="../../../music/UneDernièreDanse.mp3"
        autoPlay
      >
        Your browser does not support the
        <code>audio</code> element.
        <track
          default
          kind="captions"
          srcLang="fr"
          src="../../../music/UneDernièreDanse.vtt"
        />
      </audio>
    </div>
  );
};

export default QuizzAudio;
