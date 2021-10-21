import React from 'react';
import AnswerButton from './components/AnswerButton/AnswerButton';
import TimerButton from './components/TimerButton/TimerButton';

function App() {
  return (
    <div>
      <div>
        <AnswerButton />
        <AnswerButton />
        <AnswerButton />
        <AnswerButton />
      </div>
      <div>
        <TimerButton />
      </div>
    </div>
  );
}

export default App;
