import React from 'react';
import WelcomePage from './Components/WelcomePage/WelcomePage'
import PlayerCard from "./Components/PlayerCard/PlayerCard";

import './App.css';
import TextInputComponent from './TextInputComponent.js';
import ButtonComponent from './ButtonComponent.js'

import Card from './Components/Card/CustomCard'
import Map from './Components/Board/Map'
import GameBoard from './Components/Board/GameBoard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage/>
        <PlayerCard/>
        <Card setOccupation={'retail'} />
        <GameBoard/>
      </header>
    </div>
  );
}

export default App;
