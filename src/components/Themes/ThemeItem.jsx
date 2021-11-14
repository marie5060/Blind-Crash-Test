import PropTypes from 'prop-types';
import './ThemeItem.css';

const ThemeItem = ({ themeName, themeId, setChosenId, setChosenTheme }) => {
  return (
    <div>
      <button
        type="button"
        className="glow-on-hover"
        onClick={() => {
          setChosenId(themeId);
          setChosenTheme(themeName);
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
  setChosenTheme: PropTypes.func.isRequired,
};
