import React, { useState } from 'react';
import './TimerButton.css';

// Création du timer
const TimerButton = () => {
  const [leftTime, setLeftTime] = useState(100);
  const timerStyle = {
    width: `${leftTime}%`,
  };
  React.useEffect(() => {
    const timer =
      leftTime > 0 && setInterval(() => setLeftTime(leftTime - 0.1), 30);
    return () => clearInterval(timer);
  }, [leftTime]);
  return (
    <div id="progressBar">
      <div className="bar" style={timerStyle} />
    </div>
  );
};

export default TimerButton;
