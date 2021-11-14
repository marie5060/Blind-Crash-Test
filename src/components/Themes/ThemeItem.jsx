import PropTypes from 'prop-types';
import './ThemeItem.css';

const ThemeItem = ({
  themeName,
  themeId,
  setChosenId,
  chosenId,
  // handleClickTheme,
  // resetTheme,
}) => {
  // const [chosenThemeName, setChosenThemeName] = useState(false);

  let themeButtonClass = 'glow-on-hover';
  if (themeId === chosenId) {
    themeButtonClass = 'theme-chosen-button';
  }

  return (
    <div>
      <button
        type="button"
        className={themeButtonClass}
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
  chosenId: PropTypes.string.isRequired,
};
