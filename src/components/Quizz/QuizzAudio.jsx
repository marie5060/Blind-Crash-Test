import React from 'react';
import PropTypes from 'prop-types';
import './QuizzAudio.css';

const QuizzAudio = ({ url }) => {
  return (
    <div className="audioContainer">
      <audio className="audio" controls src={url} autoPlay>
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

QuizzAudio.propTypes = {
  url: PropTypes.string.isRequired,
};
