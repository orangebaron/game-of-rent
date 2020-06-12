import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import GameBoard from './Components/Board/GameBoard';
import './App.css';
import PlayerSetupPage from './Components/PlayerSetup/PlayerSetup';
import GameSetupPage from './Components/GameSetupPage/GameSetupPage';
import ResultsPage from './Components/ResultsPage/ResultsPage';
import { Provider } from 'react-redux'




const App = ({store}) => (
    <Provider store={store}>
      <Router>
       <Switch>
        <Route exact path='/'>
          <WelcomePage/>
          </Route>
        <Route exact path='/setup'>
        <GameSetupPage/>
        </Route>

         <Route path="/players">
           <PlayerSetupPage/>
           </Route>
          <Route path="/board">
            <GameBoard />
          </Route>


          <Route path="/results">
            <ResultsPage />
          </Route>
      </Switch>

      </Router>
    </Provider>
);


export default App;
