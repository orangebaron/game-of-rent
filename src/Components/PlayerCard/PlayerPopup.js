import React from 'react';
import Popup from './img/Popup.png';
import nameBubble from './img/nameBubble.png';
import './PlayerPopup.css';

function PlayerPopup(props) {
  return (
    <div className="PlayerPopup">
      <img src={Popup} className="PlayerPopup-background" alt="logo" />
      <img src={nameBubble} className="PlayerPopup-bubble" alt="logo" />
      <p className="PlayerPopup-text">
        Player Name: {props.cardProps[0]}
        <br />
        Total Monthly Income: ${props.cardProps[1]}
      </p>
      <button type="button" className="PlayerPopup-xButton" alt="xButton">X</button>
    </div>
  );
}

export default PlayerPopup;
