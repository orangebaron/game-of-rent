/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import croppedBoard from './img/croppedBoard.png';
import grayOverlay from './img/grayOverlay.png';
import './WelcomePage.css';

function WelcomePage() {
  return (
    <div className="WelcomePage">
      <header className="WelcomePage-header">
        <img src={croppedBoard} className="WelcomePage-map" alt="logo" />
        <p className="WelcomePage-title">
                    Welcome to the Game of Rent!
        </p>
        <p className="WelcomePage-introText">
                    More and more American families and individuals are finding it increasingly difficult to live
                    somewhere they can afford. In the Game of Rent, each player will have to make the most of what
                    they’ve given and find an apartment you can afford to rent as close to your job as possible.
        </p>
        <img src={grayOverlay} className="WelcomePage-grey" alt="logo" />
        <button className="WelcomePage-button">Let's get started</button>
      </header>
    </div>
  );
}

export default WelcomePage;
