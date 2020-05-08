import React from 'react';
import PlayerIcon from '../PlayerIcon/PlayerIcon';

function PlayerRadio(props) {
  return (
    <label style={{cursor: "pointer", margin: "4px"}}>
        <input type="radio" name={props.name} value={props.num} style={{position: "absolute", opacity: 0, width: 0}} />
        <PlayerIcon num={props.num} />
    </label>
  );
}


export default PlayerRadio;
