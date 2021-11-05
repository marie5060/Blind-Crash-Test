import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';

const TimerButton = ({ btnClicked, setLeftTimeWhenClick }) => {
  const [leftTime, setLeftTime] = useState(100);
  const [step, setStep] = useState(0.1);
  const timerStyle = {
    width: `${leftTime}%`,
  };

  useEffect(() => {
    const timer =
      leftTime > 0 && setInterval(() => setLeftTime(leftTime - step), 30);
    return () => clearInterval(timer);
  }, [leftTime]);

  useEffect(() => {
    if (btnClicked) {
      setStep(0);
      setLeftTimeWhenClick(leftTime);
    } else {
      setLeftTime(100);
      setStep(0.1);
    }
  }, [btnClicked]);

  return (
    <div id="progressBar">
      <div className="bar" style={timerStyle} />
    </div>
  );
};

export default TimerButton;

TimerButton.propTypes = {
  btnClicked: PropTypes.bool.isRequired,
  setLeftTimeWhenClick: PropTypes.func.isRequired,
};
