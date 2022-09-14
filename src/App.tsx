import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardsWeather from "./components/CardsWeather";
import CardWeatherAll from "./components/CardWeatherAll";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const BodyTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
`;

function App() {
  return (
    <Router>
      <Navbar />
      <BodyTitle>
        <CardsWeather />
        <CardWeatherAll />
      </BodyTitle>

      <Switch>
        <Route exact path="/">
          <CardsWeather />
        </Route>
        <Route path="/about">
          <CardWeatherAll />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
