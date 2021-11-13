import PropTypes from 'prop-types';
import { useState } from 'react';
import './ThemeItem.css';

const ThemeItem = ({
  themeName,
  themeId,
  setChosenId,
  // handleClickTheme,
  // resetTheme,
}) => {
  const [chosenTheme, setChosenTheme] = useState(false);

  console.log(chosenTheme);
  let themeButtonClass = 'glow-on-hover';

  themeButtonClass = chosenTheme ? 'chosenthemeBtn' : 'glow-on-hover';

  return (
    <div>
      <button
        type="button"
        className={themeButtonClass}
        onClick={() => {
          setChosenTheme(true);
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
