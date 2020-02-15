import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Map from './Map';
import PlayerCard from '../PlayerCard/PlayerCard';
import OccupationCardBack from '../Card/img/GameOfRent_OccupationBack.jpg';
import LifeCardBack from '../Card/img/GameOfRent_LifeBack.jpg';
import NeighborhoodCardBack from '../Card/img/GameOfRent_NeighborhoodBack.jpg';
import HouseholdCardBack from '../Card/img/GameOfRent_HouseholdBack.jpg';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#4CACE9',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100vw',
    height: '100vh',
  },
  playerCardSection: {
    width: '15vw',
    height: '100vh',
  },
  map: {
    width: '70vw',
    height: '100vh',
    backgroundColor: 'yellow',
  },
  gameCardSection: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '15vw',
    height: '100vh',
  },
}));

function GameBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.playerCardSection}>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
      <div className={classes.map}>
        <Map />
      </div>
      <div className={classes.gameCardSection}>
        <img style={{ height: '160px' }} src={OccupationCardBack} className="card" alt="OccupationCardBack" />
        <img style={{ height: '160px' }} src={HouseholdCardBack} className="card" alt="HouseholdCardBack" />
        <img style={{ height: '160px' }} src={LifeCardBack} className="card" alt="LifeCardBack" />
        <img style={{ height: '160px' }} src={NeighborhoodCardBack} className="card" alt="NeighborhoodCardBack" />
      </div>
    </div>
  );
}

export default GameBoard;
