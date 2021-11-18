import PropTypes from 'prop-types';
import PodiumStep from './PodiumStep';

const Podium = ({ winners }) => {
  const podium = [4, 2, 0, 1, 3]
    .reduce((podiumOrder, rank) => [...podiumOrder, winners[rank]], [])
    .filter(Boolean);

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column dense',
        gap: '.5rem',
        paddingTop: '2rem',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottom: '1px solid #e5e7eb',
        height: 250,
      }}
    >
      {podium.map((winner) => (
        <PodiumStep
          key={winner.id}
          podiumLength={podium.length}
          winner={winner}
        />
      ))}
    </div>
  );
};

export default Podium;
Podium.propTypes = {
  winners: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
