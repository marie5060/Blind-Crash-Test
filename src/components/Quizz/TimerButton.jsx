import React, { useState } from 'react';
import './TimerButton.css';

// Création du timer
const TimerButton = () => {
  const [count, setCount] = useState(30);

  React.useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="timerbutton">
      Timer {count}
      {/* Compteur de questions */}
      <div>
        <p>Questions x/10</p>
      </div>
      {/* Création du bouton */}
      <div>
        <button type="button">Suivant</button>
      </div>
    </div>
  );
};

export default TimerButton;
