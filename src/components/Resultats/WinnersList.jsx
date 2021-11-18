import PropTypes from 'prop-types';
import WinnerCard from './WinnerCard';

const WinnersList = ({ winners }) => {
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      {winners.map((winner, index) => (
        <WinnerCard
          key={winner.id}
          winners={winners}
          winner={winner}
          index={index}
        />
      ))}
    </div>
  );
};
export default WinnersList;

WinnersList.propTypes = {
  winners: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
