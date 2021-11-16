import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PersoCard.css';
import inter from './inter.png';
import check from './check.png';
import reduce from './window-minimize.png';

const PersoCard = ({ newId, setnewId, setChosenId, onlyNumbers, chosenId }) => {
  const [showCard, setShowcard] = useState(false);

  console.log(showCard);
  let displayCard = 'displayNone';
  let displayCardReduct = 'playlist-perso-card-reduct';

  if (showCard) {
    displayCard = 'playlist-perso-container';
    displayCardReduct = 'displayNone';
  }

  let icone = 'displayNone';

  if (onlyNumbers === chosenId) {
    icone = 'icone-theme';
  }

  return (
    <div>
      <div className={displayCardReduct}>
        <h2>Jouer avec ma propre Playlist Deezer</h2>
        <button type="button" onClick={() => setShowcard(!showCard)}>
          go
        </button>
      </div>
      <div className={displayCard}>
        <div className="inter-container">
          <img
            src={reduce}
            alt="reduce the card"
            className="icone-theme"
            onClick={() => setShowcard(false)}
          />
          <img
            src={inter}
            className="icone-theme"
            alt="point d'interrogation"
          />
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
          <img
            src={check}
            alt="check vert"
            className={icone}
            id="check-playlist"
          />
        </div>
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
  chosenId: PropTypes.string.isRequired,
};
