import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './Card/CustomCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card setOccupation={'retail'} />
      </header>
    </div>
    <p>trying git rebase</p>
  );
}

export default App;
