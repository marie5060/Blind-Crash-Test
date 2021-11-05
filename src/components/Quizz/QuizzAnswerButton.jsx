import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QuizzAnswerButton.css';

const QuizzAnswerButton = ({
  answer,
  rightAnswer,
  handleClick,
  btnClicked,
}) => {
  const [chosen, setChosen] = useState(false);

  let buttonClass = 'answerButton';

  if (btnClicked) {
    buttonClass = 'answerButton';
    if (chosen) {
      if (answer === rightAnswer) {
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
};
