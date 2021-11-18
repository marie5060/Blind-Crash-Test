import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineBulb } from 'react-icons/ai';
import './DifficultyExplain.css';

const DifficultyExplain = ({ getModal }) => {
  return (
    <div className="difficulty-explain-container">
      <button
        type="button"
        onClick={getModal}
        className="difficulty-explain-button"
      >
        <AiOutlineBulb size="1.5em" className="info-icon" />
      </button>
    </div>
  );
};

export default DifficultyExplain;

DifficultyExplain.propTypes = {
  getModal: PropTypes.func.isRequired,
};
