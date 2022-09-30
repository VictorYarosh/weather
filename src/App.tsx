import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CardsPages } from './cocommon.styled';
import NavBar from './components/navbar/NavBar';
import CardWeather from './components/cards/cards-weather';
import CardWeatherAll from './components/cards/card-weather-all';

function App() {
  return (
    <Router>
      <NavBar />
      <CardsPages>
        <CardWeather />
        <CardWeatherAll />
      </CardsPages>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about">
          <CardWeatherAll />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
