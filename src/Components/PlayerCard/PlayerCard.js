import React from 'react';
import infoBubble from './img/infoBubble.png';
import './PlayerCard.css';
import PlayerIcon from '../PlayerIcon/PlayerIcon';

function PlayerCard() {
  return (
    <div className="PlayerCard">
      <header className="PlayerCard-header">

        <p className="PlayerCard-Name">
                    John Doe
        </p>
        <PlayerIcon num="0" className="PlayerCard-Avatar" alt="player avatar" />
        <p className="PlayerCard-Summary">
                    Family Monthly Income:
          {' '}
          <br />
$2,500
        </p>
        <div className="PlayerCard-infoIcon">
          <img src={infoBubble} alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default PlayerCard;
