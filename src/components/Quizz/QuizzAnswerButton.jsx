/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import './QuizzAnswerButton.css'; 

const QuizzAnswerButton = ({ answer,  rightAnswer, handleClick, btnClicked}) => {
  const [chosen, setChosen] = useState(false)

let buttonClass = "answerButton";

    if (btnClicked) {
      if (chosen) {
        if (answer === rightAnswer) {
          buttonClass += " chosenBtn";
        } else {
          buttonClass += " loose chosenBtn";
        }
      } else if ( answer !== rightAnswer) {
          buttonClass += " loose";
      } 
    }

  return <button className = {buttonClass} type="button" onClick={(e) => (
    handleClick(), 
    setChosen(true)
  )}> {answer} </button>
};

export default QuizzAnswerButton; 

