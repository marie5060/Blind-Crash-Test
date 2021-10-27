import React from 'react';
import QuizzCard from '../Quizz/QuizzCard';
import TimerButton from '../Quizz/TimerButton';
import QuizzScore from '../Quizz/QuizzScore';
import LinkBtn from '../Bases/LinkBtn';

const Content = () => {
  return (
    <main>
      <h1>Page Quizz</h1>
      <QuizzCard />
      <TimerButton />
      <QuizzScore />
      <LinkBtn />
      <LinkBtn />
    </main>
  );
};

export default Content;
