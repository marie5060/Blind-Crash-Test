import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';

const TimerButton = ({ btnClicked, setLeftTimeWhenClick, setBtnClicked }) => {
  const [leftTime, setLeftTime] = useState(100);
  const [step, setStep] = useState(0.1);
  const timerStyle = {
    width: `${leftTime}%`,
  };

  const resetTimer = () => {
    setStep(0.1);
    setLeftTime(100);
  };

  useEffect(() => {
    const timer =
      leftTime > 0 && setInterval(() => setLeftTime(leftTime - step), 15);
    if (leftTime < 1) {
      setBtnClicked(true);
    }
    return () => clearInterval(timer);
  }, [leftTime]);

  useEffect(() => {
    if (btnClicked) {
      setStep(0);
      setLeftTimeWhenClick(leftTime);
      setTimeout(() => resetTimer(), 3000);
    }
  }, [btnClicked]);

  return (
    <div id="progress-bar">
      <div className="bar" style={timerStyle} />
    </div>
  );
};

export default TimerButton;

TimerButton.propTypes = {
  btnClicked: PropTypes.bool.isRequired,
  setLeftTimeWhenClick: PropTypes.func.isRequired,
  setBtnClicked: PropTypes.func.isRequired,
};
