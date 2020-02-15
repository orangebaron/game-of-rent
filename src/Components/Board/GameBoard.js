import React from 'react';
import './GameBoard.css';
import Map from './Map';
import PlayerCard from '../PlayerCard/PlayerCard';
import OccupationCardBack from '../Card/img/GameOfRent_OccupationBack.jpg';
import LifeCardBack from '../Card/img/GameOfRent_LifeBack.jpg';
import NeighborhoodCardBack from '../Card/img/GameOfRent_NeighborhoodBack.jpg';
import HouseholdCardBack from '../Card/img/GameOfRent_HouseholdBack.jpg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

function GameBoard() {
  const classes = useStyles();

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
        <img src={OccupationCardBack} className="card" alt="OccupationCardBack" />
        <img src={HouseholdCardBack} className="card" alt="HouseholdCardBack" />
        <img src={LifeCardBack} className="card" alt="LifeCardBack" />
        <img src={NeighborhoodCardBack} className="card" alt="NeighborhoodCardBack" />
      </div>
    </div>
  );
}

export default GameBoard;
