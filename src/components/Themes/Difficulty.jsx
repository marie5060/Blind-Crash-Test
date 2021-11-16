import { AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './Difficulty.css';

const Stars = ({ setDifficulty, position, difficulty }) => {
  return (
    <button
      type="button"
      className="stars-container"
      onClick={() => {
        setDifficulty(position);
      }}
    >
      <AiFillStar
        size="4em"
        color={position <= difficulty ? 'yellow' : 'white'}
      />
    </button>
  );
};

export default Stars;

Stars.propTypes = {
  setDifficulty: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  difficulty: PropTypes.func.isRequired,
};
