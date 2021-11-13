import PropTypes from 'prop-types';
import star from './star.png';
import './Difficulty.css';

const Stars = ({ setDifficulties }) => {
  const starClass = 'star';
  // const starClassChange = () => {
  console.log(setDifficulties);
  // }

  return (
    <button type="button" className="stars-container">
      <img
        src={star}
        alt="star"
        // onClick={(setDifficulties(true), starClassChange())}
        className={starClass}
      />
    </button>
  );
};

export default Stars;

Stars.propTypes = {
  setDifficulties: PropTypes.func.isRequired,
};
