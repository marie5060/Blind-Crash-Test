import React from 'react';
import './ThemeItem.css';
import PropTypes from 'prop-types';

const ThemeItem = ({ themeName }) => {
  return (
    <div>
      <button type="button" className="themeButton">
        {themeName}
      </button>
    </div>
  );
};

export default ThemeItem;

ThemeItem.propTypes = {
  themeName: PropTypes.string.isRequired,
};
