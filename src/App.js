import React from 'react';
import WelcomePage from './WelcomePage'
import PlayerCard from "./PlayerCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <WelcomePage/>
          <PlayerCard/>
      </header>
    </div>
  );
}

export default App;
