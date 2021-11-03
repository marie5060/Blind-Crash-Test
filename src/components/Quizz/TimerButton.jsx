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
  // const element = document.getElementById('progressBar');
  // const timeleft = 30;
  // const timetotal = 30;
  // const progressBarWidth = (timeleft * element.offsetWidth) / timetotal;
  // element
  //   .find('div')
  //   .animate({ width: progressBarWidth }, 500)
  //   .html(`${Math.floor(timeleft / 60)}:${timeleft % 60}`);
  // if (timeleft > 0) {
  //   setTimeout(() => {
  //     TimerButton(timeleft - 1, timetotal, element);
  //   }, 1000);
  // }
  return (
    <div id="progressBar">
      <div className="bar" style={timerStyle} />
    </div>
  );
};

export default TimerButton;
