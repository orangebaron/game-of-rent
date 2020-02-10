import React from 'react';
import nameBubble from './img/nameBubble.png';
import infoBubble from './img/infoBubble.png';
import './PlayerCard.css';

function PlayerCard() {
  return (
    <div className="PlayerCard">
      <header className="PlayerCard-header">

        <p className="PlayerCard-Name">
                    John Doe
        </p>
        <img src={nameBubble} className="PlayerCard-Avatar" alt="logo" />
        <p className="PlayerCard-Summary">
                    Family Monthly Income:
          {' '}
          <br />
$2,500
        </p>
          <img src={infoBubble} className="PlayerCard-infoIcon" alt="logo" />
      </header>
    </div>
  );
}

export default PlayerCard;
