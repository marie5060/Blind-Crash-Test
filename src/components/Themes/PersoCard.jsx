import React from 'react';
import PropTypes from 'prop-types';
import './PersoCard.css';
import inter from './inter.png';

const PersoCard = ({ newId, setnewId, setChosenId, onlyNumbers }) => {
  return (
    <div className="playlist-perso-container">
      <div className="inter-container">
        <img src={inter} id="inter" alt="point d'interrogation" />
      </div>

      <div className="flex-card-container">
        <h2>Jouer avec ma propre Playlist Deezer</h2>
        <input
          type="text"
          value={newId}
          id="playlist-deezer"
          onChange={(e) => setnewId(e.target.value)}
        />
        <button
          id="playlist-submit"
          type="submit"
          onClick={() => setChosenId(onlyNumbers)}
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default PersoCard;

PersoCard.propTypes = {
  newId: PropTypes.string.isRequired,
  setnewId: PropTypes.func.isRequired,
  setChosenId: PropTypes.func.isRequired,
  onlyNumbers: PropTypes.string.isRequired,
};
