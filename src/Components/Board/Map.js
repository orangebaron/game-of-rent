import React, { useState } from 'react';
import "./Map.css"
import Nash from './img/Nashville-map.jpg'

function Map() {
    return (
        <div className="Map">
            <img src={Nash} className="Nashville-map" />
            <p className="Map-extraLetter">
                S
            </p>
        </div>
    );
}

export default Map;
