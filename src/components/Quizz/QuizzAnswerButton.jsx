import { useState } from 'react';
import PropTypes from 'prop-types';
import './QuizzAnswerButton.css';

const QuizzAnswerButton = ({
  answer,
  rightAnswer,
  handleClick,
  btnClicked,
  setWin,
  difficulty,
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
    setTimeout(() => {
      setChosen(false);
    }, 3000);
  }

  if (difficulty === 5) {
    buttonClass += ' hard-difficulty';
  }

  return (
    <button
      className={buttonClass}
      type="button"
      disabled={btnClicked}
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
  setWin: PropTypes.func.isRequired,
  difficulty: PropTypes.number.isRequired,
};
