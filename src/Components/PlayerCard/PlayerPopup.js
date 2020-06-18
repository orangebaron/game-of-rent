import React from 'react';
import Popup from './img/Popup.png';
import PlayerIcon from '../PlayerIcon/PlayerIcon.js';
import './PlayerPopup.css'
import CustomCard from '../Card/CustomCard'
import MiniCustomCard from '../Card/MiniCustomCard'

function PlayerPopup(props) {
    return (
        <div className='player-popup-background'>

            <div className={'player-popup-avatar'}>
                <PlayerIcon width={'7vw'} num={props.player.avatar}/>
            </div>

            <div className='player-popup-text'>
                <h2>{props.player.playerName}</h2>
                {props.player.info &&
                    <div>
                        <p>Total Housing Monthly Income: ${props.player.info.householdMonthlyIncome}</p>
                        <p>Monthly Housing Income: ${props.player.info.monthlyHousingAllowance}</p>
                        <p>Minimum Number of Bedrooms: {props.player.info.minimumNumBedrooms}</p>
                    </div>
                }
            </div>

            <div className='player-popup-card-section'>

                {/*switched to using the mini cards here bc of different styling needs, may have to go back*/}
                    {/*{props.player.family.map(member => (*/}
                    {/*    <div className='player-popup-card'>*/}
                    {/*        <CustomCard width={'100%'} height={'100%'} cardProps={["Household", member]} />*/}
                    {/*    </div>*/}
                    {/*))}*/}

                {props.player.job &&
                <div className='player-popup-card'>
                    <MiniCustomCard cardProps={["Occupation", props.player.job]}/>
                </div>
                }

                {props.player.family.map(member => (
                        <div className='player-popup-card'>
                            <MiniCustomCard cardProps={["Household", member]} />
                        </div>
                ))}

                {props.player.family.map(member => (
                    <div className='player-popup-card'>
                        {member.job &&
                        <MiniCustomCard cardProps={["Occupation", member.job]} />
                        }
                    </div>
                ))}

                {props.player.life.map(event => (
                    <div className='player-popup-card'>
                        <MiniCustomCard cardProps={["Life", event]} />
                    </div>
                ))}




            </div>


            <p onClick={props.onClick} style={{
                position: "absolute",
                margin: 0,
                top: 0,
                right: 10,
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: 40
            }}>X</p>
        </div>
    );
}

export default PlayerPopup;
