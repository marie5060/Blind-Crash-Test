/*eslint-disable*/
import React from 'react';
import './QuizzAnswerButton.css';

const QuizzAnswerButton = ({ answer }) => {
  return <button className = "answerButton" type="button"> {answer} </button>;
};

export default QuizzAnswerButton;

