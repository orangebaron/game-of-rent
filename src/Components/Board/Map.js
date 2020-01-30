import React, { useState } from 'react';
import './Map.css';
import Nash from './img/Nashville-map.jpeg';

function Map() {
  return (
    <div className="Map">
      <img src={Nash} className="Nashville-map" />
    </div>
  );
}

export default Map;
