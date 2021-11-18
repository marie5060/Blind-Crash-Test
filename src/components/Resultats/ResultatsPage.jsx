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
    state: { currentScore, difficulty },
  },
}) => {
  const [winners, setWinners] = useState([]);

  const [cursorPosition, setCursorPosition] = useState(0);
  const cursorStyle = {
    left: `${cursorPosition}%`,
  };

  const compare = (player1, player2) => {
    if (player1.rank < player2.rank) {
      return -1;
    }
    if (player1.rank > player2.rank) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    // add incoming quizz if redirect from quizzPage in sessionStorage
    if (currentScore !== null) {
      setCursorPosition((currentScore - currentScore / 10) / 10 / difficulty);

      let winnerIntegre = false;
      let currentRank = 4;

      /* eslint-disable no-param-reassign */
      winnerList.map((winner) => {
        winner.score *= difficulty;

        return winner;
      });

      winnerList.map((winner) => {
        if (winner.score < currentScore && !winnerIntegre) {
          currentRank = winner.rank;

          winnerIntegre = true;
        }
        if (winnerIntegre) {
          winner.rank += 1;
        }
        console.log(winnerIntegre);
        return winner;
      });

      /* eslint-enable no-param-reassign */
      const winnerARajouter = {
        id: 5,
        name: 'Curry',
        score: currentScore,
        rank: currentRank,
      };
      const winnerSorted = [...winnerList, winnerARajouter].sort(compare);
      setWinners(winnerSorted);
    }
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
  difficulty: PropTypes.number.isRequired,
};
export default ResultatsPage;
