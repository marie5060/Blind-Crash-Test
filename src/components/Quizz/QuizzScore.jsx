import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const QuizzScore = ({ currentScore, nbQuizz }) => {
  const [totalScore, setTotalScore] = useState(20);

  useEffect(() => {
    setTotalScore(totalScore + currentScore);
  }, [nbQuizz]);

  return <span className="score">{totalScore}</span>;
};

export default QuizzScore;

QuizzScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
  nbQuizz: PropTypes.number.isRequired,
};
