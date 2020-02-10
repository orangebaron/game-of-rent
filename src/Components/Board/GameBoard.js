import React from 'react';
import './GameBoard.css';
import Map from './Map';
import PlayerCard from '../PlayerCard/PlayerCard';
import Dice from '../Dice/Dice';


function GameBoard() {
  return (
    <div className="Board">
        <div className='playerCardSection'>
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
        </div>
      <Map />
      {/*<Dice />*/} //want to add dice to map

    </div>
  );
}

export default GameBoard;
