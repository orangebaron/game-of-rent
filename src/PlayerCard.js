import React from 'react';
import playerBackground from './playerBackground.png';
import nameBubble from './nameBubble.png';
import infoBubble from './infoBubble.png';
import './PlayerCard.css';

function PlayerCard() {
    return (
        <div className="PlayerCard">
            <header className="PlayerCard-header">
                <img src={playerBackground} className="PlayerCard-background" alt="logo" />
                <p className="PlayerCard-Name">
                    John Doe
                </p>
                <img src={nameBubble} className="PlayerCard-nameBubble" alt="logo"/>
                <button className="PlayerCard-infoButton"></button>
                <img src={infoBubble} className="PlayerCard-infoIcon" alt="logo"/>
                <p className="PlayerCard-playerBackground">
                    Family Monthly Income: <br></br>$2,500
                </p>
            </header>
        </div>
    );
}

export default PlayerCard;