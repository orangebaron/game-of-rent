import React from 'react';
import Button from '@material-ui/core/Button';
import PlayerRadio from '../PlayerRadio/PlayerRadio';
import './PlayerSetup.css';
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { addPlayer } from '../../actions/index';
import {Link} from 'react-router-dom';
import store from '../../store/index';





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
const state = store.getState;



class ConnectedPlayerSetup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            playerName: '',
            setupCount: 1,

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
        this.setState({setupCount: this.state.setupCount + 1})
    }

    nextStep() {
        this.setState({
            setupLocation: this.state.setupLocation + 1,
        });
    };



    render() {
        const { classes } = this.props;
        const { playerName } = this.state;

        let button;
        if (this.state.setupCount > this.props.playerCount){
            button = <Link to='/board'>
                <Button type='submit' variant="contained">
                    Finish
                </Button>
            </Link>
        } else {
            button = <Button type='submit' variant="contained">
                Next
            </Button>
        }

        return (
            <div className='backgroundImage'>

                <div className='playerSetupPage'>
                    <div style={styles.playerSetup}>

                        <div style={styles.textGrid}>
                            {/*<h1>{setup[this.state.setupLocation]}</h1>*/}
                            <h1>Player {this.state.setupCount}</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div style={styles.fields}>

                                    <label htmlFor="playerName">Enter a name for your player</label>

                                    {/*todo delete this later*/}
                                    {/*<input*/}
                                    {/*    type="text"*/}
                                    {/*    id="playerName"*/}

                                    {/*    onChange={this.handleChange}*/}
                                    {/*    style={styles.textBox}*/}
                                    {/*    required='true'*/}
                                    {/*/>*/}

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
                                        {button}
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

function mapDispatchToProps(dispatch) {
    return {
        addPlayer: player => dispatch(addPlayer(player))
    };
}

const mapStateToProps= state => {
    return {
        playerCount: state.playerCount
    }
}

const PlayerSetup = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedPlayerSetup);


export default PlayerSetup;
