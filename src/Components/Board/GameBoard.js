import React, {useRef} from 'react';
import './GameBoard.css';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';
import PlayerCard from '../PlayerCard/PlayerCard';
import FlippingCard from '../FlippingCard/FlippingCard';
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

function showCardFullscreen(ref, cardId, cardProps) {
  document.getElementById("overlay").style.display = "block"; // TODO getting by id is probably bad
  ref.startForRightCard(document.getElementById(cardId), cardProps);
}

function showPlayerCardFullscreen(ref, buttonId, cardProps) {
  document.getElementById("overlay").style.display = "block"; // TODO getting by id is probably bad
  ref.startForLeftCard(document.getElementById(buttonId), cardProps);
}

function closeFullscreenCard(ref) {
  ref.goFromCenter(() => document.getElementById("overlay").style.display = "none");
}

function GameBoard() {
  const classes = useStyles();
  const sketchyRef = {}; // passed as an argument to FlippingCard; FlippingCard sets sketchyRef.ref = this; then used in button click handlers
  // there must be a better way to do this
  return (
    <div className={classes.root}>
      <div id="overlay" style={{height:"100%", width:"100%", backgroundColor:"rgba(0,0,0, 0.5)", zIndex:1, position:"fixed", display:"none"}}>
        <p onClick={() => closeFullscreenCard(sketchyRef.ref)} style={{position:"fixed",left:"90%",color:"white",fontWeight:"bold",cursor:"pointer"}}>X</p>
        <FlippingCard sketchyRef={sketchyRef} startSize={[0, 0]} startXY={[0, 0]} />
      </div>
      <div className={classes.playerCardSection}>
        <PlayerCard btnId="info1" onClick={() => showPlayerCardFullscreen(sketchyRef.ref, "info1", ["Person A", 111])} />
        <PlayerCard btnId="info2" onClick={() => showPlayerCardFullscreen(sketchyRef.ref, "info2", ["Person B", 222])} />
        <PlayerCard btnId="info3" onClick={() => showPlayerCardFullscreen(sketchyRef.ref, "info3", ["Person C", 333])} />
        <PlayerCard btnId="info4" onClick={() => showPlayerCardFullscreen(sketchyRef.ref, "info4", ["Person D", 444])} />
      </div>
      <div className={classes.map}>
        <Map />
      </div>
      <div className={classes.gameCardSection}>
        <img style={{ height: '160px'}} id="occupationCardBack"   src={OccupationCardBack}   className="card" alt="OccupationCardBack"   onClick={() => showCardFullscreen(sketchyRef.ref, "occupationCardBack",   ["Occupation", "Retail worker", "Monthly Income:", "$65", "A", 1])} />
        <img style={{ height: '160px'}} id="householdCardBack"    src={HouseholdCardBack}    className="card" alt="HouseholdCardBack"    onClick={() => showCardFullscreen(sketchyRef.ref, "householdCardBack",    ["Household", "Filler text A", "Lorem ipsum", "dolor sit amet", "B", 2])} />
        <img style={{ height: '160px'}} id="lifeCardBack"         src={LifeCardBack}         className="card" alt="LifeCardBack"         onClick={() => showCardFullscreen(sketchyRef.ref, "lifeCardBack",         ["Life", "Filler text B", "Lorem ipsum", "dolor sit amet", "C", 3])} />
        <img style={{ height: '160px'}} id="neighborhoodCardBack" src={NeighborhoodCardBack} className="card" alt="NeighborhoodCardBack" onClick={() => showCardFullscreen(sketchyRef.ref, "neighborhoodCardBack", ["Neighborhood", "Filler text C", "Lorem ipsum", "dolor sit amet", "D", 4])} />
      </div>

    </div>

  );
}

export default GameBoard;
