import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import Players from './views/Players/Players';
import TeamsDetails from './views/Teams/TeamsDetails';
import PlayersDetails from './views/Players/PlayersDetails';
import background from './background.jpeg';

function App() {
  return (
    <>
      {/* <div style={{ backgroundImage: `url(${background})` }}> */}
      <BrowserRouter>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Teams">
              <Teams />
            </Route>
            <Route exact path="/Teams/:id">
              <TeamsDetails />
            </Route>
            <Route exact path="/Players">
              <Players />
            </Route>
            <Route exact path="/Players/:id">
              <PlayersDetails />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
