import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import CardsWeather from "./components/cards/CardsWeather";
import CardWeatherAll from "./components/cards/CardWeatherAll";

const BodyTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
        <Route exact path="/"></Route>
        <Route path="/about">
          <CardWeatherAll />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
