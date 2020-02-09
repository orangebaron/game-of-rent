/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './WelcomePage.css';
import Background from './img/croppedBoard.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const sectionStyle = {
  width: '100vw',
  height: 'auto',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

function WelcomePage() {
  return (
    <section style={sectionStyle}>
      <div className="WelcomePage">
        <header className="WelcomePage-header">
          <p className="WelcomePage-title">
                      Welcome to the Game of Rent!
          </p>
          <p className="WelcomePage-introText">
                      More and more American families and individuals are finding it increasingly difficult to live
                      somewhere they can afford. In the Game of Rent, each player will have to make the most of what
                      they’ve given and find an apartment you can afford to rent as close to your job as possible.
          </p>
          <Link to="/board">
            <button className="WelcomePage-button">
              Let's get started
            </button>
          </Link>
          
        </header>
      </div>
    </section>
  );
}

export default WelcomePage;
