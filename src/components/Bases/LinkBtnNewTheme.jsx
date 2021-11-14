import { Link } from 'react-router-dom';
import './linkBtnNewTheme.css';

const LinkBtnNewTheme = () => {
  return (
    <div>
      <Link to="/Blind-Crash-Test/Themes">
        <button type="button" className="new-theme">
          Choisis ta partie !
        </button>
      </Link>
    </div>
  );
};

export default LinkBtnNewTheme;
