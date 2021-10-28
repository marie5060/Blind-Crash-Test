/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import './QuizzAnswerButton.css'; 

const QuizzAnswerButton = ({ answer,  rightAnswer, handleClicked, btnClicked}) => {

  let classes = "answerButton"

  useEffect(() => {
    classes += answer === rightAnswer ? "" : " loose";
  }, [btnClicked])

  return <button className = {classes} type="button" onClick={(e) => (
    handleClicked(),
    e.target.classList.add("chosenBtn")
  )}> {answer} </button>;
};

export default QuizzAnswerButton; 

