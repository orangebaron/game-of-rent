import React from 'react';
import WelcomePage from './Components/WelcomePage/WelcomePage'
import PlayerCard from "./Components/PlayerCard/PlayerCard";

import './App.css';
import TextInputComponent from './TextInputComponent.js';
import ButtonComponent from './ButtonComponent.js'


import Card from './Components/Card/CustomCard'
import ScrollDowns from "./Components/WelcomePage/Scrolldowns";
import PlayerPopup from "./Components/PlayerCard/PlayerPopup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage/>
        <PlayerCard/>
        <ScrollDowns/>
        <PlayerPopup/>
        <Card setOccupation={'retail'} />
      </header>
    </div>
  );
}

export default App;
