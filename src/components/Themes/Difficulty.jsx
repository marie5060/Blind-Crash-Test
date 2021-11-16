import { AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './Difficulty.css';

const Stars = ({ setDifficulty, position }) => {
  return (
    <button
      type="button"
      className="stars-container"
      onClick={() => {
        setDifficulty(position);
      }}
    >
      <AiFillStar size="4em" className="star-icon" />
    </button>
  );
};

export default Stars;

Stars.propTypes = {
  setDifficulty: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};
