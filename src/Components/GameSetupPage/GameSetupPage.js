/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

import './GameSetupPage.css';
import Background from './img/croppedBoard.png';
// import {MenuItem} from 'react-bootstrap';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';



const sectionStyle = {
  width: '100vw',
  height: 'auto',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};



function GameSetupPage(){
    return (
        <div style={sectionStyle}>
            <header className = "overlay">
            <div classname = "GameSetupPage">
                <header className = "GameSetupPage-Title">
                
                    <p className = "Title">
                            Game Setup
                    </p>
                </header>

            <div className = "Questions">

            <div className = "Question-1">
                <p className = "Question-1-text">
                    How many people are playing?
                </p>
                <div className="Scrolldowns-num">
                
                

                    <select id="numbers">
                        <option value = "1"> 1</option>
                        <option value = "2"> 2</option>
                        <option value = "3"> 3</option>
                        <option value = "4"> 4</option>
                        <option value = "5"> 5</option>
                        <option value = "6"> 6</option>

                    </select>
                    {/* <MenuList>
                        <MenuItem key = "1">
                            1
                        </MenuItem>
                        <MenuItem key = "2">
                            2
                        </MenuItem>
                        <MenuItem key = "3">
                            3
                        </MenuItem>
                        <MenuItem key = "4">
                            4
                        </MenuItem>
                        <MenuItem key = "5">
                            5
                        </MenuItem>
                        <MenuItem key = "6">
                            6
                        </MenuItem>
                    </MenuList> */}
                </div>
            </div>
          
            <div className = "Question-2">
                <p className = "Question-2-text">
                    What city do you want to play in?
                </p>
                <div className = "Scrolldowns-cit">
                <p className="Scrolldowns-cities">
                <select id="numbers">
                        <option value = "1"> Nashville</option>
                        <option value = "2"> Chicago</option>
                        <option value = "3"> Seattle</option>
                        <option value = "4"> New York</option>
                        <option value = "5"> Atlanta</option>
                        <option value = "6"> Los Angeles</option>
                        <option value = "7"> San Francisco</option>
                        <option value = "8"> Philadelphia</option>
                        <option value = "9"> Brooklyn</option>
                        <option value = "10"> Denver</option>
                </select>

                {/* <MenuList>
                        <MenuItem key = "1">
                            Nashville
                        </MenuItem>
                        <MenuItem key = "2">
                        Chicago
                        </MenuItem>
                        <MenuItem key = "3">
                        Seattle
                        </MenuItem>
                        <MenuItem key = "4">
                        New York
                        </MenuItem>
                        <MenuItem key = "5">
                        Atlanta
                        </MenuItem>
                        <MenuItem key = "6">
                        Los Angeles
                        </MenuItem>
                        <MenuItem key = "7">
                        San Francisco
                        </MenuItem>
                        <MenuItem key = "8">
                        Philadelphia
                        </MenuItem>
                        <MenuItem key = "9">
                        Brooklyn
                        </MenuItem>
                        <MenuItem key = "10">
                        Denver
                        </MenuItem>
                    </MenuList> */}
                
                </p>
                </div>
            </div>

            </div>
                
            <div className="nextButton">
                    <Link to="/character">
                        <button type="button" className="GameSetupPage-button"
                        size = "large">
                            Next
                        </button>
                    </Link>
            </div>

                
            </div>
            </header>
        </div>
    )


}


export default GameSetupPage;
