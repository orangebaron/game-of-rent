import React from 'react';
import './Map.css';
import Nash from './img/Nashville-map.jpg';

function Map() {
  return (
    <div className="Map">
      <img src={Nash} className="Nashville-map" alt="Nashville-map" />
    </div>
  );
}

export default Map;
