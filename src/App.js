import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import GameBoard from './Components/Board/GameBoard';
import PlayerSetup from './Components/PlayerSetup/PlayerSetup';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <GameBoard />
        </Route>
        <Route path="/character">
          <PlayerSetup />
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
