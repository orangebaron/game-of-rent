import React from 'react';
import './Scrolldowns.css';

function Scrolldowns() {
  return (
    <div className="Scrolldowns">
      <p className="Scrolldowns-numPlayers">
        <select size="3">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </p>
      <p className="Scrolldowns-cities">
        <select size="3">
          <option>Nashville</option>
          <option>Chicago</option>
          <option>Seattle</option>
          <option>New York</option>
          <option>Atlanta</option>
          <option>Los Angeles</option>
          <option>San Francisco</option>
          <option>Philadelphia</option>
          <option>Brooklyn</option>
          <option>Denver</option>
        </select>
      </p>
    </div>
  );
}

export default Scrolldowns;
