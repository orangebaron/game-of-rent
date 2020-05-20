/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './WelcomePage.css'
import {Link} from 'react-router-dom'

const sectionStyle = {
  // display: 'flex',
  // flexDirection: 'row',
  // alignItems: 'baseline',
  // justifyContent: 'center',
  // minHeight: '100vh',
  // width: '100vw',
  // height: 'auto',
  // backgroundImage: `url(${Background})`,
  // backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // fontFamily: '"Roboto", sans-serif',
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

  borderRadius: '1em',
  width: '65vw',
  maxWidth: 1000,
  height: '50vh',
  maxHeight: 400,
  padding: '2%',
  textAlign: 'center',
  fontSize: '1.5em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center'

};

const buttonStyle = {
  color: '#ffffff',
  fontWeight: 700,
  border: '2px solid #ffffff',
  margin: 20,
  width: 100,
}


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

      <div className='backgroundImage'>
        <div className={'welcomePage'}>
          <header style={headerStyle}>
            <div style={textGrid}>
              <div className='title'>
                <h1> Welcome to the Game of Rent! </h1>
              </div>

              <p className="WelcomePage-introText">
                More and more American families and individuals are finding
                it increasingly difficult to live
                somewhere they can afford. In the Game of Rent, each player
                will have to make the most of what
                they’ve given and find an apartment you can afford to rent
                as close to your job as possible.
              </p>
              <Link to='/setup'>
                <Button variant="outlined" style={buttonStyle} >
                  Start
                </Button>
              </Link>
            </div>
          </header>
        </div>
      </div>

  );
}

export default WelcomePage;
