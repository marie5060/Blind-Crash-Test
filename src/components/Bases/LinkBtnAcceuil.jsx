import React from 'react';
import './LinkBtnAcceuil.css';

const LinkBtnAccueil = () => {
  return (
    <div className="wrapper">
      <div className="bg">
        <div className="content">
          <p>This is some text to go along with the button!</p>
        </div>
      </div>
      <div className="btn-wrapper">
        <div className="cube spin">
          <div className="face front text">Click Me!</div>
          <div className="face back text">
            <div className="msg success">Wewt!</div>
            <div className="msg fail">Fail =/</div>
          </div>
          <div className="face right" />
          <div className="face left" />
          <div className="face top" />
          <div className="face bottom" />
        </div>
      </div>
    </div>
  );
};

export default LinkBtnAccueil;
