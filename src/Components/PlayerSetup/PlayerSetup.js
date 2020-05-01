import React from 'react';
import Button from '@material-ui/core/Button';
import Background from '../WelcomePage/img/croppedBoard.png';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import './PlayerSetup.css';
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

const setup = ['Player 1', 'Player 2', '...'];


const styles = {
  mapBackground: {
    width: '100vw',
    height: 'auto',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  playerSetup: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textGrid: {
    backgroundColor: '#000000aa',
    borderRadius: '1em',
    width: '60vw',
    height: '70vh',
    padding: '2%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBox: {
    border: 0,
    width: '30vw',
    height: '5vh',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: '20px',
  },
  avatarSection: {

    width: '50vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '2vh',

  },
  playerAvatar: {
    cursor: 'pointer',
  },
};


const InstructionText = [
  "Welcome to the game of rent! You will now take on the role of a person in [CITY] searching for affordable housing. It is your job to find the best housing for you and your family considering all your circumstances. Let's find out more about your character. Click on the yellow card to discover your occupation!",
  "Now that you have your occupation, it's time to determine your household! Click on the die to roll for the number of family members.",
  'That means you have X other family members in your household. Draw a household card and an occupation card if that family members is of working age.',
  'Everyone has unforseen circumstances arise in their lives. Draw a life card for each adult in your household including yourself!',
  'Your household is finally set! Now click on the calculator icon to find out your monthly housing allowance. This is how much you can afford to spending on housing each month.',
];


class PlayerSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setupLocation: 0,
    };
  }

  nextStep() {
    this.setState({
      setupLocation: this.state.setupLocation + 1,
    });
  }

  render() {
    return (

      <div style={{ backgroundColor: 'gray' }}>
        <p>{InstructionText[this.state.setupLocation].replace('[CITY]', this.props.city || 'Nashville')}</p>
        <div style={styles.mapBackground}>
          <div style={styles.playerSetup}>
            <h1>{setup[this.state.setupLocation]}</h1>
            <div style={styles.textGrid}>

              <div style={styles.fields}>
                <h2>Enter a name for your player</h2>
                <input type="text" style={styles.textBox} />
              </div>

              <div style={styles.fields}>
                <h2>Choose an avatar for your player</h2>

                {/* eslint-disable-next-line max-len */}
                {/* Hey Sam, temporarily added this radio tag here to try to allow selection of one avatar. It currently isn't working but I think its closer, list should be horizontal though */}

                <RadioGroup classes={{ label: 'avatars' }}>
                  <PlayerIcon num="0" control={<Radio />} />
                  <PlayerIcon num="1" control={<Radio />} />
                  <PlayerIcon num="2" control={<Radio />} />
                  <PlayerIcon num="3" control={<Radio />} />
                  <PlayerIcon num="4" control={<Radio />} />
                  <PlayerIcon num="5" control={<Radio />} />
                </RadioGroup>

              </div>

              <Button variant="contained" href="/board">
                Finish
              </Button>

            </div>


          </div>
        </div>
      </div>

    );
  }
}

export default PlayerSetup;
