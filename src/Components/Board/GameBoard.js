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
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-transition-group';




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
    overflow: 'scroll',
  },
  map: {
    width: '70vw',
    height: '100vh',
    // backgroundColor: 'yellow', todo delete this on production
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

function ConnectedGameBoard({playerList, city}) {

  const classes = useStyles();
  const sketchyRef = {}; // passed as an argument to FlippingCard; FlippingCard sets sketchyRef.ref = this; then used in button click handlers
  // there must be a better way to do this

  const [playerTurn, setPlayerTurn] = React.useState(1);
  const [instructionLocation, setInstructionLocation] = React.useState(0);
  const nextInstruction = () => {
    setInstructionLocation(instructionLocation + 1);
  }
  const InstructionText = [
    `Welcome to the Game of Rent! You will now take on the role of a person in ${city} searching for affordable housing. It is your job to find the best housing for you and your family considering all your circumstances. Let's find out more about your character. Click on the yellow card to discover your occupation!`,
    "Now that you have your occupation, it's time to determine your household! Click on the die to roll for the number of family members.",
    'That means you have X other family members in your household. Draw a household card and an occupation card if that family members is of working age.',
    'Everyone has unforseen circumstances arise in their lives. Draw a life card for each adult in your household including yourself!',
    'Your household is finally set! Now click on the calculator icon to find out your monthly housing allowance. This is how much you can afford to spending on housing each month.',
  ];



  return (
    <div className={classes.root}>

      <div className='instruction-section'>
        <p>{InstructionText[instructionLocation]}</p>
      </div>


      {/*todo need to eventually move this styling out of here*/}
      <div id="overlay" style={{height:"100%", width:"100%", backgroundColor:"rgba(0,0,0, 0.5)", zIndex:1, position:"fixed", display:"none"}}>
        <p onClick={() => closeFullscreenCard(sketchyRef.ref)} style={{position:"fixed",left:"90%",color:"white",fontWeight:"bold",cursor:"pointer"}}>X</p>
        <FlippingCard sketchyRef={sketchyRef} startSize={[0, 0]} startXY={[0, 0]} />
      </div>

      <div className={classes.playerCardSection}>
        {/*<PlayerCard avatar={0} btnId="info1" onClick={() => showPlayerCardFullscreen(sketchyRef.ref, "info1", ["Person A", 111])} />*/}
        {/*<PlayerCard avatar={1} btnId="info2" onClick={() => showPlayerCardFullscreen(sketchyRef.ref, "info2", ["Person B", 222])} />*/}

         {playerList.map(player => (
             <PlayerCard btnId="info1" playerName={player.playerName} avatar={player.avatar} onClick={() => showPlayerCardFullscreen(sketchyRef.ref, "info1")}/>
         ))}

      </div>

      <div className={classes.map}>
        <Map />
      </div>

      <div className={classes.gameCardSection}>
        <img style={{ height: '20vh'}} id="occupationCardBack"   src={OccupationCardBack}   className="card" alt="OccupationCardBack"   onClick={() => {showCardFullscreen(sketchyRef.ref, "occupationCardBack",   ["Occupation", "Retail worker", "Monthly Income:", "$65", "A", 1]); nextInstruction()}} />
        <img style={{ height: '20vh'}} id="householdCardBack"    src={HouseholdCardBack}    className="card" alt="HouseholdCardBack"    onClick={() => showCardFullscreen(sketchyRef.ref, "householdCardBack",    ["Household", "Filler text A", "Lorem ipsum", "dolor sit amet", "B", 2])} />
        <img style={{ height: '20vh'}} id="lifeCardBack"         src={LifeCardBack}         className="card" alt="LifeCardBack"         onClick={() => showCardFullscreen(sketchyRef.ref, "lifeCardBack",         ["Life", "Filler text B", "Lorem ipsum", "dolor sit amet", "C", 3])} />
        <img style={{ height: '20vh'}} id="neighborhoodCardBack" src={NeighborhoodCardBack} className="card" alt="NeighborhoodCardBack" onClick={() => showCardFullscreen(sketchyRef.ref, "neighborhoodCardBack", ["Neighborhood", "Filler text C", "Lorem ipsum", "dolor sit amet", "D", 4])} />
      </div>

    </div>

  );
}

const mapStateToProps= state => {
  return {
    playerList: state.players,
    city: state.city
  }
}

const GameBoard = connect(
    mapStateToProps,
)(ConnectedGameBoard);



export default GameBoard;
