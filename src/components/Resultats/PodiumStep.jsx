import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PodiumStep = ({ podiumLength, winner }) => {
  const offset = podiumLength - winner.rank;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        placeContent: 'center',
      }}
    >
      <motion.div
        style={{
          alignSelf: 'center',
          marginBottom: '.25rem',
          color: 'whitesmoke',
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              delay: 1 + (offset + 2),
              duration: 0.75,
            },
          },
          hidden: { opacity: 0 },
        }}
      >
        <div> {winner.name} </div>
      </motion.div>

      <motion.div
        style={{
          width: '4rem',
          placeContent: 'center',
          display: 'flex',
          borderTopLeftRadius: '.5rem',
          borderTopRightRadius: '.5rem',
          borderColor: 'rgba(190,24,93,1)',
          backgroundColor: 'white',
          marginBottom: -1,
          filter: `opacity(${0.1 + offset / podiumLength})`,
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            height: 200 * (offset / podiumLength),
            opacity: 1,
            transition: {
              delay: 1 + offset,
              duration: 2,
              ease: 'backInOut',
            },
          },
          hidden: { opacity: 0, height: 0 },
        }}
      >
        <span style={{ color: 'white', alignSelf: 'flex-end' }}>
          {winner.rank}
        </span>
      </motion.div>
    </div>
  );
};

export default PodiumStep;

PodiumStep.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.array]).isRequired,
  podiumLength: PropTypes.number.isRequired,
};
