import React from 'react';
import './GameBoard.css';
import Map from './Map';
import CustomCard from '../Card/CustomCard';
import PlayerCard from '../PlayerCard/PlayerCard';


function GameBoard() {
  return (
    <div className="Board">
      <Map />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
    </div>
  );
}

export default GameBoard;
