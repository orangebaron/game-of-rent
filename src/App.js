import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import GameBoard from './Components/Board/GameBoard';
import './App.css';
import PlayerSetup from './Components/PlayerSetup/PlayerSetup';
import GameSetup from './Components/GameSetupPage/GameSetupPage';
import ResultsPage from './Components/ResultsPage/ResultsPage';

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
        <Route exact path="/setup">
          <GameSetup />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;