import React, { useState } from 'react';
import './TimerButton.css';

const TimerButton = () => {
  const [count, setCount] = useState(30);

  React.useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="timerbutton">
      Timer {count}
      <div>
        <p>Questions x/10</p>
      </div>
      <div>
        <button type="button">Suivant</button>
      </div>
    </div>
  );
};

export default TimerButton;
