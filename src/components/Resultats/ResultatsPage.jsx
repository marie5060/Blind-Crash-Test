import PropTypes from 'prop-types';
import { useState, useEffect } from 'react/cjs/react.development';
import Stars from '../Themes/Difficulty';
import './ResultatsPage.css';

const ResultatsPage = ({
  location: {
    state: { currentScore, chosenTheme, pseudo, difficulty },
  },
}) => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    if (currentScore !== null) {
      const starsQte = [];
      if (difficulty) {
        for (let i = 0; i < difficulty; i += 1) {
          starsQte.push(i);
        }
      }

      const result =
        sessionStorage.getItem('resultArray') === null
          ? []
          : JSON.parse(sessionStorage.resultArray);
      result.push({
        currentScore,
        pseudo,
        chosenTheme,
        difficulty: starsQte,
      });
      sessionStorage.setItem('resultArray', JSON.stringify(result));
    }
    const unorderedWinners = JSON.parse(sessionStorage.getItem('resultArray'));
    function bubulle(tab2) {
      const tab = tab2;
      let changed;
      do {
        changed = false;
        for (let i = 0; i < tab.length - 1; i += 1) {
          if (tab[i].currentScore > tab[i + 1].currentScore) {
            const tmp = tab[i];
            tab[i] = tab[i + 1];
            tab[i + 1] = tmp;
            changed = true;
          }
        }
      } while (changed);
      return tab;
    }
    setWinners(bubulle(unorderedWinners).reverse());
  }, []);

  return (
    <main>
      <div className="result-gauge">
        Méga
        mauvais=============================|==================================Méga
        Bon
      </div>
      <div className="result-table-container">
        <h1 className="result-title">Tableau des scores</h1>
        <table className="result-table">
          <thead>
            <tr>
              <th>Score</th>
              <th>Pseudo</th>
              <th>Thème</th>
              <th>Difficulté</th>
            </tr>
          </thead>
          <tbody>
            {winners.map((winner) => (
              <tr>
                <td>{winner.currentScore}</td>
                <td>{winner.pseudo}</td>
                <td>{winner.chosenTheme}</td>
                <td className="result-stars-container">
                  {winner.difficulty.map((elem) => (
                    <Stars key={elem} />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ResultatsPage;

ResultatsPage.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
  currentScore: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  chosenTheme: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
};
