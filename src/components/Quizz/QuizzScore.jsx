import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const QuizzScore = ({ currentScore, nbQuizz, btnClicked }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (nbQuizz === 10 && btnClicked) {
      setTimeout(() => {
        setRedirect(true);
      }, 3000);
    }
  }, [btnClicked]);

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: '/Blind-Crash-Test/Resultats',
          state: { currentScore },
        }}
      />
    );
  }

  return <span className="score">{currentScore}</span>;
};

export default QuizzScore;

QuizzScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
  nbQuizz: PropTypes.number.isRequired,
  btnClicked: PropTypes.bool.isRequired,
};
