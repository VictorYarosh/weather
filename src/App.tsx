import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Title} from "./cocommon.styled";
import Navbar from "./components/navbar/navbar";
import CartWeather from "./components/cards/cards-weather";
import CardWeatherAll from "./components/cards/card-weather-all";


function App() {
  return (
    <Router>
      <Navbar />
      <Title>
        <CartWeather />
        <CardWeatherAll />
      </Title>

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
