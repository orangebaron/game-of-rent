/* eslint-disable react/jsx-filename-extension */
import { Link } from 'react-router-dom';
import './GameSetupPage.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { updateCityAndCount } from '../../actions/index';
import { useDispatch } from 'react-redux' //todo JADEN, this is awesome, use it!!







const useStyles = makeStyles((theme) => ({
    button: {
        color: '#ffffff',
        fontWeight: 700,
        border: '2px solid #ffffff',
        margin: 20
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    outlined: {
        width: 200,
        textAlign: 'center',
        borderColor: 'white'
    },
    icon: {
        fill: 'white',
    },
    root: {
        color: 'white',
        borderColor: 'white'
    }
}));





function GameSetupPage(){
    const classes = useStyles();
    const dispatch = useDispatch()
    const [numPlayers, setNumPlayers] = React.useState('');
    const [cityLocation, setCityLocation] = React.useState('');

    const changePlayerNum = (event) => {
        setNumPlayers(event.target.value);
    };

    const changeCityLocation = (event) => {
        setCityLocation(event.target.value);
    };

    const handleSubmit = () => {
        console.log('hit');
        dispatch(updateCityAndCount({ playerCount: numPlayers, city: cityLocation}));
    }


    return (
        <div className='backgroundImage'>
            <div className = "GameSetupPage">

                <p className={'pageTitle'}>Game Setup</p>

                <div className = "Questions">

                    <div className = "Question-1">
                        <p className = "Question-1-text">How many people are playing?</p>

                        <FormControl  variant={'outlined'} className={classes.formControl}>
                            <InputLabel id="num-player-select"># Players</InputLabel>
                            <Select
                                id="num-player-select"
                                value={numPlayers}
                                onChange={changePlayerNum}
                                label='# Players'
                                classes={{
                                    root: classes.root,
                                    outlined: classes.outlined,
                                }}
                                inputProps={{
                                    classes: {
                                        icon: classes.icon,
                                        notchedOutline: classes.notchedOutline
                                    },
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className = "Question-2">
                        <p className = "Question-2-text">What city do you want to play in?</p>

                        {/*todo jaden check these stylings*/}
                        <div className = "Scrolldowns-cit">
                            <div className="Scrolldowns-cities">

                                <FormControl variant={'outlined'} className={classes.formControl}>
                                    <InputLabel labelid="city-select">City</InputLabel>
                                    <Select
                                        id="city-select"
                                        value={cityLocation}
                                        onChange={changeCityLocation}
                                        label='city'
                                        classes={{
                                            root: classes.root,
                                            outlined: classes.outlined,
                                        }}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                                notchedOutline: classes.notchedOutline
                                            },
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value = "Nashville"> Nashville</MenuItem>
                                        <MenuItem value = "Chicago"> Chicago</MenuItem>
                                        <MenuItem value = "Seattle"> Seattle</MenuItem>
                                        <MenuItem value = "New York"> New York</MenuItem>
                                        <MenuItem value = "Atlanta"> Atlanta</MenuItem>
                                        <MenuItem value = "Los Angeles"> Los Angeles</MenuItem>
                                        <MenuItem value = "San Franciso"> San Francisco</MenuItem>
                                        <MenuItem value = "Philadelphia"> Philadelphia</MenuItem>
                                        <MenuItem value = "Brooklyn"> Brooklyn</MenuItem>
                                        <MenuItem value = "Denver"> Denver</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={'buttonSection'}>
                    <Button onClick={handleSubmit} variant="outlined" classes={{outlined: classes.button}} >
                        Next
                    </Button>
                </div>

            </div>
        </div>
    )
}


export default GameSetupPage;
