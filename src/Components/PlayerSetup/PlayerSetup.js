import React from 'react';
import Button from '@material-ui/core/Button';
import PlayerRadio from '../PlayerRadio/PlayerRadio';
import './PlayerSetup.css';
import TextField from '@material-ui/core/TextField';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import { connect } from 'react-redux';
import { addPlayer } from '../../actions/index';
import {
    withStyles,
 } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import store from '../../store/index';


//todo need to figure out how to appropriately style the Mui textbox
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

        width: '40vw',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2vh',

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

//Creates TextField for player name with the appropriate css
const CssTextField = withStyles({
    root: {

      '& label.MuiFormLabel-root': {
        color: 'white',
      },
    
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);


class ConnectedPlayerSetup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            playerName: '',
            avatarIndex: '',
            setupCount: 1,

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // const { playerName } = this.state; todo i might not need these anymore
        // const { avatarIndex } = this.state;
        this.props.addPlayer({ playerName: this.state.playerName, avatar: this.state.avatarIndex });
        this.setState({ playerName: '', avatarIndex: ''});
        this.setState({setupCount: this.state.setupCount + 1})
    }





    render() {
        const { classes } = this.props;
        const { playerName } = this.state;
        const { avatarIndex } = this.state;

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
                            <h1>Player {this.state.setupCount}</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div style={styles.fields}>

                                    <label htmlFor="playerName">Enter a name for your player</label>
                                    <CssTextField

                                    /*todo delete this later*/
                                    /*<input*/
                                    /*    type="text"*/
                                    /*    id="playerName"*/

                                    /*    onChange={this.handleChange}*/
                                    /*    style={styles.textBox}*/
                                    /*    required='true'*/
                                    /*/>*/

                                        required
                                        id="playerName"
                                        name='playerName'
                                        label="Player Name"
                                        variant="outlined"
                                        className = "inputLabel"
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
                                            //makes input white
                                            style:{
                                                color: 'white'
                                            },
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

                                                <input className='avatar-radio-buttons' id='option0' onChange={this.handleChange} type='radio' value={0} name='avatarIndex' required/>
                                                <label className='avatar-image' htmlFor='option0'><PlayerIcon num={0}/></label>

                                                <input className='avatar-radio-buttons' id='option1' onChange={this.handleChange} type='radio' value={1} name='avatarIndex'/>
                                                <label className='avatar-image' htmlFor='option1'><PlayerIcon num={1}/></label>

                                                <input className='avatar-radio-buttons' id='option2' onChange={this.handleChange} type='radio' value={2} name='avatarIndex'/>
                                                <label className='avatar-image' htmlFor='option2'><PlayerIcon num={2}/></label>

                                                <input className='avatar-radio-buttons' id='option3' onChange={this.handleChange} type='radio' value={3} name='avatarIndex'/>
                                                <label className='avatar-image' htmlFor='option3'><PlayerIcon num={3}/></label>

                                                <input className='avatar-radio-buttons' id='option4' onChange={this.handleChange} type='radio' value={4} name='avatarIndex'/>
                                                <label className='avatar-image' htmlFor='option4'><PlayerIcon num={4}/></label>

                                                <input className='avatar-radio-buttons' id='option5' onChange={this.handleChange} type='radio' value={5} name='avatarIndex'/>
                                                <label className='avatar-image' htmlFor='option5'><PlayerIcon num={5}/></label>


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
