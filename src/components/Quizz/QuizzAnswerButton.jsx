/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import './QuizzAnswerButton.css'; 

const QuizzAnswerButton = ({ answer,  rightAnswer, handleClicked, btnClicked}) => {
  console.log('in btn it\'s clicked' + btnClicked)
  let [classes, setClasses] = useState("answerButton");
  const [chosen, setChosen] = useState(false)
  // let classes = "answerButton"
  useEffect(() => {
    if (btnClicked) {
      if (chosen) {
        if (answer === rightAnswer) {
          setClasses("answerButton chosenBtn")
        } else {
          setClasses("answerButton chosenBtn loose")
        }
      } else if (!chosen && answer !== rightAnswer) {
        setClasses("answerButton loose")
      }
    }
  }, [btnClicked])

  return <button className = {classes} type="button" onClick={(e) => (
    handleClicked(),
    setChosen(true)
  )}> {answer} </button>;
};

export default QuizzAnswerButton; 

