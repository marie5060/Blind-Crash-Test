/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import './QuizzAnswerButton.css'; 

const QuizzAnswerButton = ({ answer,  rightAnswer, handleClicked, btnClicked}) => {
  console.log('in btn it\'s clicked' + btnClicked)
  let [classes, setClasses] = useState("answerButton");
  btnClicked?setClasses(classes += (answer === rightAnswer ? "" : " loose"));
  // let classes = "answerButton"
  // useEffect(() => {
  //   setClasses(classes += (answer === rightAnswer ? "" : " loose"));
  //   console.log(classes, answer)
  // }, [])

  return <button className = {classes} type="button" onClick={(e) => (
    handleClicked(),
    e.target.classList.add("chosenBtn")
  )}> {answer} </button>;
};

export default QuizzAnswerButton; 

