import React from 'react';
import Background from '../WelcomePage/img/croppedBoard.png';
import PlayerIcon from '../PlayerIcon/PlayerIcon';

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
    width: '75vw',
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
              <div style={styles.avatarSection}>
                <PlayerIcon num="0" style={styles.playerAvatar} />
                <PlayerIcon num="1" style={styles.playerAvatar} />
                <PlayerIcon num="2" style={styles.playerAvatar} />
                <PlayerIcon num="3" style={styles.playerAvatar} />
                <PlayerIcon num="4" style={styles.playerAvatar} />
                <PlayerIcon num="5" style={styles.playerAvatar} />
              </div>


            </div>


          </div>


        </div>
      </div>
    );
  }
}

export default PlayerSetup;
