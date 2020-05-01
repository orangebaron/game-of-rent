/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Background from './img/croppedBoard.png';

const sectionStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100vw',
  height: 'auto',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontFamily: '"Roboto", sans-serif',
};


const headerStyle = {
  height: '100vh',
  width: 'auto',
  color: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'baseline',
  justifyContent: 'center',
};

const textGrid = {
  backgroundColor: '#000000aa',
  borderRadius: '1em',
  width: '65vw',
  padding: '2%',
  textAlign: 'center',
  fontSize: '1.5em',
};

const buttonStyle = {
  color: '#ffffff',
  fontWeight: 700,
  border: '2px solid #ffffff',
};


// .WelcomePage-introText{
//   position: absolute;
//   font-family: Roboto;
//   top: 35%;
//   font-size: calc(5px + 2vmin);
//   display: flex;
//   left: 35%;
//   right: 35%;
//   z-index: 3;
// }

// .WelcomePage-button{
//   position: relative;
//   font-family: Roboto;
//   bottom: 15%;
//   border-radius: 12px;
//   background-color: white;
//   padding: 1% 3%;
//   z-index: 3;
//   cursor: pointer;
// }

function WelcomePage() {
  return (
    <div style={sectionStyle}>
      <header style={headerStyle}>
        <div style={textGrid}>
          <p>
            Welcome to the Game of Rent!
          </p>
          <p className="WelcomePage-introText">
            More and more American families and individuals are finding
            it increasingly difficult to live
            somewhere they can afford. In the Game of Rent, each player
            will have to make the most of what
            they’ve given and find an apartment you can afford to rent
            as close to your job as possible.
          </p>
          <Button variant="outlined" style={buttonStyle} href="/board">
            Start
          </Button>
        </div>
      </header>
    </div>
  );
}

export default WelcomePage;
