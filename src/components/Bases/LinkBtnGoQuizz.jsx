import React from 'react';
import './linkBtnGoQuizz.css';
import { Link } from 'react-router-dom';

const LinkBtnGoQuizz = () => {
  return (
    <div>
      <Link to="/Blind-Crash-Test/Quizz">
        <button type="button" className="go-quizz">
          Lancer le Quizz !
        </button>
      </Link>
    </div>
  );
};

export default LinkBtnGoQuizz;
