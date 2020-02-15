import React from 'react';
import './GameBoard.css';
import Map from './Map';
import PlayerCard from '../PlayerCard/PlayerCard';
import OccupationCardBack from '../Card/img/GameOfRent_OccupationBack.jpg';
import LifeCardBack from '../Card/img/GameOfRent_LifeBack.jpg';
import NeighborhoodCardBack from '../Card/img/GameOfRent_NeighborhoodBack.jpg';
import HouseholdCardBack from '../Card/img/GameOfRent_HouseholdBack.jpg';

function GameBoard() {
  return (
    <div className="Board">
      <div className="playerCardSection">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
      <Map />
      <div className="gameCardSection">
        <img src={OccupationCardBack} className="card" />
        <img src={HouseholdCardBack} className="card" />
        <img src={LifeCardBack} className="card" />
        <img src={NeighborhoodCardBack} className="card" />

      </div>

    </div>
  );
}

export default GameBoard;
