import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CardsTitle } from './cocommon.styled';
import Index from './components/navbar';
import CardWeather from './components/cards/cards-weather';
import CardWeatherAll from './components/cards/card-weather-all';

function App() {
  return (
    <Router>
      <Index />
      <CardsTitle>
        <CardWeather />
        <CardWeatherAll />
      </CardsTitle>
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
