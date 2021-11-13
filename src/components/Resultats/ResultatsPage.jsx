import PropTypes from 'prop-types';
import Stars from '../Themes/Difficulty';
import './ResultatsPage.css';

const ResultatsPage = ({
  location: {
    state: { currentScore, chosenTheme, pseudo, difficulty },
  },
}) => {
  const starsQte = [];
  if (difficulty) {
    for (let i = 0; i < difficulty; i += 1) {
      starsQte.push(i);
    }
  }

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
            <tr>
              <td>{currentScore}</td>
              <td>{pseudo}</td>
              <td>{chosenTheme}</td>
              <td className="result-stars-container">
                {starsQte.map((elem) => (
                  <Stars key={elem} />
                ))}
              </td>
            </tr>
            <tr>
              <td>10 000</td>
              <td>Aurélien</td>
              <td>Céline Dion</td>
              <td className="result-stars-container">
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
              </td>
            </tr>
            <tr>
              <td>10 000</td>
              <td>Aurélien</td>
              <td>Céline Dion</td>
              <td className="result-stars-container">
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
              </td>
            </tr>
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
