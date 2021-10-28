/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import './QuizzAnswerButton.css'; 

const QuizzAnswerButton = ({ answer,  rightAnswer, handleClicked, btnClicked}) => {
  console.log('in btn it\'s clicked' + btnClicked)
  let [classes, setClasses] = useState("answerButton");
  // let classes = "answerButton"
  useEffect(() => {
    btnClicked?setClasses(answer === rightAnswer ? "answerButton" : "answerButton loose") :"";
    console.log(classes, answer)
  }, [btnClicked])

  return <button className = {classes} type="button" onClick={(e) => (
    handleClicked(),
    e.target.classList.add("chosenBtn")
  )}> {answer} </button>;
};

export default QuizzAnswerButton; 

