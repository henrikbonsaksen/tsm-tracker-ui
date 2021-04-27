import './App.css';
import Container from './Components/Container';
import Menu from './Components/Menu'
import React from "react";

import Home from './Screens/Home';
import HistoricalData from './Screens/HistoricalData';
import Graphs from './Screens/Graphs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const menuItems = [
  { title: 'Home', route: '/' },
  { title: 'Historical data', route: '/historical' },
  { title: 'Graphs', route: '/graphs' },
]

function App() {
  return (
    <Router>
      <Container>
        <Menu menuItems={menuItems} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/historical" >
            <HistoricalData />
          </Route>
          <Route path="/graphs" >
            <Graphs />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
