import React from 'react';
import './ThemeItem.css';
import PropTypes from 'prop-types';

const ThemeItem = ({ themeName, themeId, setChosenId }) => {
  return (
    <div>
      <button
        type="button"
        className="themeButton"
        onClick={() => {
          setChosenId(themeId);
        }}
      >
        {themeName}
      </button>
    </div>
  );
};

export default ThemeItem;

ThemeItem.propTypes = {
  themeName: PropTypes.string.isRequired,
  themeId: PropTypes.string.isRequired,
  setChosenId: PropTypes.func.isRequired,
};
