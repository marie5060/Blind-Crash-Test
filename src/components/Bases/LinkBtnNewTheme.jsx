import React from 'react';
import './linkBtnNewTheme.css';
import { Link } from 'react-router-dom';

const LinkBtnNewTheme = () => {
  return (
    <div>
      <Link to="/BlindTest/Themes">
        <button type="button" className="newTheme">
          Choisis ta partie !
        </button>
      </Link>
    </div>
  );
};

export default LinkBtnNewTheme;
