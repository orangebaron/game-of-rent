import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import playerBackground from './img/playerBackground.png';
import nameBubble from './img/nameBubble.png';
import infoBubble from './img/infoBubble.png';
import InfoButton from './InfoButton';

import './PlayerCard.css';

function PlayerCard() {
  return (
    <div className="PlayerCard">
      <header className="PlayerCard-header">
        <img src={playerBackground} className="PlayerCard-background" alt="logo" />
        <p className="PlayerCard-Name">
                    John Doe
        </p>
        <img src={nameBubble} className="PlayerCard-nameBubble" alt="logo" />
        <button className="PlayerCard-infoButton" />
        <img src={infoBubble} className="PlayerCard-infoIcon" alt="logo" />
        <p className="PlayerCard-playerBackground">
                    Family Monthly Income:
          {' '}
          <br />
$2,500
        </p>
      </header>
    </div>
  );
}

export default PlayerCard;
