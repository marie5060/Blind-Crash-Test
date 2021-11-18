import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './WinnerCard.css';

const WinnerCard = ({ winners, winner, index }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={{
        visible: () => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 1 + (winners.length - winner.rank),
            duration: 0.75,
            ease: 'backInOut',
          },
        }),
        hidden: { opacity: 0, y: -100 },
      }}
      key={winner.id}
    >
      <div className="list-container">
        <div className="text-rank">{winner.rank}</div>

        <div className="text-container">
          <p className="text-name">{winner.name || 'No name'}</p>
          <p className="text-score">{winner.score}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default WinnerCard;
WinnerCard.propTypes = {
  winners: PropTypes.oneOfType([PropTypes.array]).isRequired,
  winner: PropTypes.oneOfType([PropTypes.array]).isRequired,
  index: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
