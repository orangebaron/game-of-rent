import React, { useState } from 'react';
import './Map.css';
import Nash from './img/Nashville-map-cropped.jpg';
import Letters from './img/Grid Letters.png';
import Numbers from './img/Grid Numbers.png';

function Map() {
  return (
    <div className="Map">
      <img src={Numbers} alt="numbers for map grid" className="gridNumbers" />
      <img src={Letters} alt="letters for map grid" className="gridLetters" />
      <img src={Nash} className="Nashville-map" />
    </div>
  );
}

export default Map;
