import PropTypes from 'prop-types';
import Stars from '../Themes/Difficulty';
import './ResultatsPage.css';

const ResultatsPage = ({ quizzResult }) => {
  const starsQte = [];
  for (let i = 0; i < quizzResult.difficulty; i += 1) {
    starsQte.push(i);
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
              <td>{quizzResult.scoreFinal}</td>
              <td>{quizzResult.pseudo}</td>
              <td>{quizzResult.themeName}</td>
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
  quizzResult: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
