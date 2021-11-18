import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Podium from './Podium';
import WinnersList from './WinnersList';
import './ResultatsPage.css';

const ResultatsPage = ({
  location: {
    state: { currentScore, difficulty },
  },
}) => {
  const data = [
    {
      id: 1,
      name: 'Chuck N.',
      score: 999,
      rank: 1,
    },
    {
      id: 2,
      name: 'Garou',
      score: 650,
      rank: 2,
    },
    {
      id: 3,
      name: 'Larusso',
      score: 300,
      rank: 3,
    },
    {
      id: 4,
      name: 'Homer S.',
      score: 80,
      rank: 4,
    },
  ];

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

      let currentRank = 5;

      /* eslint-disable no-param-reassign */
      data.map((winner) => {
        winner.score *= difficulty;
        if (winner.score < currentScore) {
          currentRank -= 1;
          winner.rank += 1;
        }
        return winner;
      });
      /* eslint-enable no-param-reassign */
      const winnerARajouter = {
        id: 5,
        name: 'Toi',
        score: currentScore,
        rank: currentRank,
      };

      const winnerSorted = [...data, winnerARajouter].sort(compare);
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
