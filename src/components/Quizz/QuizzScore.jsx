/* eslint-disable */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const QuizzScore = ({ currentScore, nbQuizz, setScoreFinal, btnClicked }) => {
  const [totalScore, setTotalScore] = useState(0);
  // console.log(btnClicked)
  // console.log(totalScore);
  // console.log("dans score currentScore " + currentScore)

  // useEffect(() => {
  //   if (btnClicked) {
  //     setTotalScore(totalScore + currentScore);
  //   }
  // }, [btnClicked, currentScore]);
  // console.log("dans score btnClicked "+btnClicked)
  // console.log("dans score totalScore "+totalScore);

  useEffect(() => {
    if (nbQuizz === 10 && btnClicked) {
      setScoreFinal(currentScore);
    }
  }, [btnClicked])

  return <span className="score">{currentScore}</span>;
};

export default QuizzScore;

QuizzScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
  nbQuizz: PropTypes.number.isRequired,
  setScoreFinal: PropTypes.func.isRequired,
  btnClicked: PropTypes.bool.isRequired,
};
