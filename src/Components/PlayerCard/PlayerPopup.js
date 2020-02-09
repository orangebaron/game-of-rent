import React from 'react';
import popup from './img/popup.png';
import nameBubble from './img/nameBubble.png';
import './PlayerPopup.css';

function PlayerPopup() {
  return (
    <div className="PlayerPopup">
      <img src={popup} className="PlayerPopup-background" alt="logo" />
      <img src={nameBubble} className="PlayerPopup-bubble" alt="logo" />
      <p className="PlayerPopup-text">
        Player Name: John Doe
        <br />
        Total Monthly Income: $2500
      </p>
      <button className="PlayerPopup-xButton">X</button>
    </div>
  );
}

export default PlayerPopup;
