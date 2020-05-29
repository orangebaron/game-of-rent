import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Nash from './img/Nashville-map-cropped.jpg';
import Letters from './img/Grid Letters.png';
import Numbers from './img/Grid Numbers.png';
import Dice from '../Dice/Dice.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100vw',
    height: '100vh',
  },
  map: {
    maxHeight: '50%',
    maxWidth: '50%',
  },
  numbers: {

  },
  letters: {

  },
}));

function Map() {
  const classes = useStyles();

  // the Dice component is just a wrapper for ReactDice, so why not just use that?

  return (
    <div className={classes.root}>
      {/* <img width= src={Numbers} alt="numbers for map grid" className="gridNumbers" /> */}
      {/* <img src={Letters} alt="letters for map grid" className="gridLetters" /> */}
      <img src={Nash} className={classes.map} alt="Nashville Map" />
      <div style={{position:"relative", left:-90, top:"50%"}}>
        <div style={{position:"relative",top:-90}}>
          <Dice />
        </div>
      </div>
    </div>
  );
}

export default Map;
