import React from 'react';
import WelcomePage from './Components/WelcomePage/WelcomePage'
import PlayerCard from "./Components/PlayerCard/PlayerCard";
import InstructionBox from './Components/InstructionBox/InstructionBox.js';

import './App.css';
import TextInputComponent from './TextInputComponent.js';
import ButtonComponent from './ButtonComponent.js'


import Card from './Components/Card/CustomCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage/>
        <PlayerCard/>
        <InstructionBox/>
        <Card setOccupation={'retail'} />
      </header>
    </div>
  );
}

export default App;
