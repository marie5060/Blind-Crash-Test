import React, { useState } from 'react';
import './ThemeItem.css';
// import PropTypes from 'prop-types';


const ThemeItem = ({ themeName }) => {
  
  const [themeChosen, setThemeChosen] = useState(false);

  return (
    <div>
      <button type="button" className="themeButton" onClick={() => {
        setThemeChosen(themeChosen = true);
      }}>
        {themeName}
      </button>
    </div>
  );
};

export default ThemeItem;

// ThemeItem.propTypes = {
//   themeName: PropTypes.string.isRequired,
//   indexArray: PropTypes.number.isRequired,
// };
