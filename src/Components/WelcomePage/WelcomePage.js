/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

import './WelcomePage.css';
import Background from './img/croppedBoard.png';

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
            More and more American families and individuals are finding
            it increasingly difficult to live
            somewhere they can afford. In the Game of Rent, each player
            will have to make the most of what
            they’ve given and find an apartment you can afford to rent
            as close to your job as possible.
          </p>
          <Link to="/board">
            <button type="button" className="WelcomePage-button">
              Let&apos;s get started
            </button>
          </Link>
        </header>
      </div>
    </section>
  );
}

export default WelcomePage;
