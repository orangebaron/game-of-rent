import React from 'react';
import Popup from './img/Popup.png';
import nameBubble from './img/nameBubble.png';
import './PlayerPopup.css';

function PlayerPopup() {
  return (
    <div className="PlayerPopup">
      <img src={Popup} className="PlayerPopup-background" alt="logo" />
      <img src={nameBubble} className="PlayerPopup-bubble" alt="logo" />
      <p className="PlayerPopup-text">
        Player Name: John Doe
        <br />
        Total Monthly Income: $2500
      </p>
      <button type="button" className="PlayerPopup-xButton" alt="xButton">X</button>
    </div>
  );
}

export default PlayerPopup;
