import React from 'react';
import data from './data';
import Podium from './Podium';
import WinnersList from './WinnersList';
import './ResultatsPage.css';

const ResultatsPage = () => {
  return (
    <main>
      <Podium winners={data} />
      <WinnersList winners={data} />
    </main>
  );
};

export default ResultatsPage;
