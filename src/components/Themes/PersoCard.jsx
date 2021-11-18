import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PersoCard.css';
import check from './check.png';

const PersoCard = ({ newId, setnewId, setChosenId, onlyNumbers, chosenId }) => {
  const [showCard, setShowcard] = useState(false);
  const [showTuto, setShowTuto] = useState(false);

  let tuto = 'displayNone';
  let displayCard = 'displayNone';
  let displayCardReduct = 'playlist-perso-card-reduct';

  if (showTuto) {
    tuto = 'tuto';
  } else {
    tuto = 'displayNone';
  }

  if (showCard) {
    displayCard = 'playlist-perso-container';
    displayCardReduct = 'displayNone';
  }

  let icone = 'displayNone';

  if (onlyNumbers === chosenId && onlyNumbers !== '') {
    icone = 'check-class';
  } else {
    icone = 'displayNone';
  }
  return (
    <div>
      <div className="perso-card-container">
        <div className={displayCardReduct}>
          <button
            type="button"
            className="playlist-submit"
            onClick={() => setShowcard(!showCard)}
          >
            Jouer avec ma propre playlist Deezer
          </button>
        </div>
      </div>
      <div className="container-cards">
        <div className={tuto}>
          <h3>Jouer avec sa propre playlist Deezer</h3>
          <p>
            Vous pouvez jouer à ce Blindtest avec n`importe quelle playlist
            présente sur le site Deezer ! Pas besoin d`être abonné, ni d`être
            propriétaire de celle-ci. Il vous suffit d`aller sur la playlist de
            votre choix, et de copier/coller l`URL de votre navigateur dans le
            champ prévu à cet effet. Exemple :
          </p>
          <p>https://www.deezer.com/fr/playlist/8310277302</p>
          <p>
            Conseil : Privilégiez les playlists contenant au minimum 50
            morceaux, et vérifiez qu`elles ne contiennent pas plusieurs fois le
            même morceau.
          </p>
          <p>
            Attention : Seul le lien obtenu dans l`url d`un navigateur
            fonctionne ! Ne pas copier le lien de partage de playlist obtenu
            depuis l`application mobile Deezer
          </p>
        </div>
        <div className={displayCard}>
          <div className="inter-container">
            <button
              type="button"
              alt="reduce the card"
              className="icone-theme"
              onClick={() => {
                setShowcard(false);
                setShowTuto(false);
              }}
            >
              -
            </button>
            <button
              type="button"
              className="icone-theme"
              alt="point d'interrogation"
              onClick={() => setShowTuto(!showTuto)}
            >
              ?
            </button>
          </div>

          <div className="flex-card-container">
            <h2>Jouer avec ma propre Playlist Deezer</h2>
            <input
              type="text"
              value={newId}
              id="playlist-deezer"
              onChange={(e) => setnewId(e.target.value)}
            />
            <a href="#difficulty">
              <button
                className="playlist-submit"
                type="submit"
                onClick={() => setChosenId(onlyNumbers)}
              >
                Valider
              </button>
            </a>
            <img
              src={check}
              alt="check vert"
              className={icone}
              id="check-playlist"
            />
          </div>
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
