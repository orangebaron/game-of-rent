import React from 'react';
import WelcomePage from './WelcomePage'
import PlayerCard from "./PlayerCard";
import './App.css';

import Card from './Card/CustomCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage/>
        <PlayerCard/>
        <Card setOccupation={'retail'} />
      </header>
    </div>
  );
}

export default App;
