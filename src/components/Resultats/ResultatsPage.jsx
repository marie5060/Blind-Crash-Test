/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import winnerList from './data';
import Podium from './Podium';
import WinnersList from './WinnersList';
import './ResultatsPage.css';
// import Stars from '../Themes/Difficulty';

const ResultatsPage = ({
  location: {
    state: { currentScore, chosenTheme, pseudo, difficulty },
  },
}) => {
  const [winners, setWinners] = useState([]);

  const [cursorPosition, setCursorPosition] = useState(0);
  const cursorStyle = {
    left: `${cursorPosition}%`,
  };
  
  useEffect(() => {
    console.log(winnerList);
    const result =
      sessionStorage.getItem('resultArray') === null
        ? []
        : JSON.parse(sessionStorage.resultArray);

    // add incoming quizz if redirect from quizzPage in sessionStorage
    if (currentScore !== null) {
      const starsQte = [];
      if (difficulty) {
        for (let i = 0; i < difficulty; i += 1) {
          starsQte.push(i);
        }
      }

      result.push({
        id: result.length,
        currentScore,
        pseudo,
        chosenTheme,
        difficulty: starsQte,
      });
      sessionStorage.setItem('resultArray', JSON.stringify(result));
      setCursorPosition((currentScore - currentScore / 10) / 10 / difficulty);
    }
    let winnerIntregre = false;
    let currentRank = 4;

  
    winnerList.map((winner) => {
      winner.score *= difficulty;

      return winner;
    });
    
    winnerList.map((winner) => {
      if (winner.score < currentScore) {
        currentRank = winner.rank;
        winnerIntregre = true;
      }
      if (winnerIntregre === true) {
        winner.rank += 1;
      }
      return winner;
    });

    
    const winnerARajouter = {
      id: 5,
      name: 'Curry',
      score: currentScore,
      rank: currentRank,
    };
    setWinners([...winnerList, winnerARajouter]);
  }, []);

  return (
    <main className="main-container">
      <div className="gauge-container">
        <div className="result-gauge">
          <p className="gauge-text left">
            Méga
            <br />
            Mauvais
          </p>
          <p className="gauge-text right">
            Méga
            <br />
            Bon
          </p>
          <FaCaretDown style={cursorStyle} className="gauge-current-score" />
        </div>
      </div>
      <Podium winners={winners} />
      <WinnersList winners={winners} />
    </main>
  );
};

ResultatsPage.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
  pseudo: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
};
export default ResultatsPage;
