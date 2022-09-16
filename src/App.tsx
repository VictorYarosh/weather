import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardsWeather from "./components/CardsWeather";
import CardWeatherAll from "./components/CardWeatherAll";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const BodyTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  //}
`;

const linkAPI =
  "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={5a8e5d1891f84d46b84ee08bf4a4f03b}";

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
