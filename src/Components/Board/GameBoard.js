import React from 'react';
import './GameBoard.css';
import Map from './Map';
import PlayerCard from '../PlayerCard/PlayerCard';
import Dice from '../Dice/Dice';


function GameBoard() {
  return (
    <div className="Board">
      <Map />
      <Dice />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
    </div>
  );
}

export default GameBoard;
