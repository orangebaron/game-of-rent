import React from 'react';
import Button from '@material-ui/core/Button';
import PlayerRadio from '../PlayerRadio/PlayerRadio';
import './PlayerSetup.css';
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { addPlayer } from '../../actions/index';


function select(dispatch) {
    return {
        addPlayer: player => dispatch(addPlayer(player))
    };
}

const setup = ['Player 1', 'Player 2', '...'];

//todo need ot figure out how to appropriately style the Mui textbox
const styles = {
    playerSetup: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textGrid: {
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
        justifyContent: 'space-evenly',
        height: '50vh'
    },
    textBox: {
        border: 0,
        width: '20vw',
        height: '5vh',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: '20px',

    },
    avatarSection: {

        width: '50vw',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        marginTop: '2vh',
        alignItems: 'center'

    },
    avatarIcons: {

        width: '50vw',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '2vh',

    },
    radioForm: {
        flexDirection: 'row'
    },
    cssLabel: {
        color : 'white'
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: 'white !important',
        }
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important'
    },
    root: {
        color: 'white'
    }
};




class ConnectedPlayerSetup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            setupLocation: 0,
            playerName: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { playerName } = this.state;
        this.props.addPlayer({ playerName });
        this.setState({ playerName: '' });
    }

    nextStep() {
        this.setState({
            setupLocation: this.state.setupLocation + 1,
        });
    };



    render() {
        const { classes } = this.props;
        const { playerName } = this.state;
        return (
            <div className='backgroundImage'>

                <div className='playerSetupPage'>
                    <div style={styles.playerSetup}>

                        <div style={styles.textGrid}>
                            <h1>{setup[this.state.setupLocation]}</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div style={styles.fields}>

                                    <label htmlFor="playerName">Enter a name for your player</label>
                                    <input
                                        type="text"
                                        id="playerName"

                                        onChange={this.handleChange}
                                        style={styles.textBox}
                                        required='true'
                                    />

                                    <TextField
                                        required
                                        id="playerName"
                                        label="Player Name"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                        value={playerName}
                                        style={styles.textBox}
                                        classes={{
                                            root: styles.root
                                        }}
                                        InputLabelProps={{
                                            classes: {
                                                root: styles.cssLabel,
                                            },
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: styles.cssOutlinedInput,
                                                notchedOutline: styles.notchedOutline,
                                            },
                                            inputMode: "numeric"
                                        }}
                                    />



                                    <div style={styles.avatarSection}>
                                        <h2>Choose an avatar for your player</h2>
                                        <div style={styles.avatarIcons}>
                                            <form style={styles.radioForm}>
                                                <PlayerRadio num="0" name="icon" />
                                                <PlayerRadio num="1" name="icon" />
                                                <PlayerRadio num="2" name="icon" />
                                                <PlayerRadio num="3" name="icon" />
                                                <PlayerRadio num="4" name="icon" />
                                                <PlayerRadio num="5" name="icon" />
                                            </form>
                                        </div>
                                    </div>

                                    <div className={'buttonSection'}>
                                        <Button type='submit' variant="contained">
                                            Next
                                        </Button>

                                        {/*<Button type='submit' variant="contained" href="/board" style={{'visibility': 'hidden'}}>*/}
                                        {/*  Finish*/}
                                        {/*</Button>*/}
                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>





        );
    }
}



const PlayerSetup = connect(
    null,
    select
)(ConnectedPlayerSetup);


export default PlayerSetup;
