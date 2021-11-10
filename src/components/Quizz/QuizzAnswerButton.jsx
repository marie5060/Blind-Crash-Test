import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QuizzAnswerButton.css';

const QuizzAnswerButton = ({
  answer,
  rightAnswer,
  handleClick,
  btnClicked,
  setWin,
}) => {
  const [chosen, setChosen] = useState(false);

  let buttonClass = 'answer-button';

  if (btnClicked) {
    buttonClass = 'answer-button';
    if (chosen) {
      if (answer === rightAnswer) {
        setWin(true);
        buttonClass += ' chosenBtn';
      } else {
        buttonClass += ' loose chosenBtn';
      }
    } else if (answer !== rightAnswer) {
      buttonClass += ' loose';
    }
  }

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={() => {
        console.log(
          'clliiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiick'
        );
        handleClick();
        setChosen(true);
      }}
    >
      {answer}
    </button>
  );
};

export default QuizzAnswerButton;

QuizzAnswerButton.propTypes = {
  answer: PropTypes.string.isRequired,
  rightAnswer: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  btnClicked: PropTypes.bool.isRequired,
  setWin: PropTypes.func.isRequired,
};
