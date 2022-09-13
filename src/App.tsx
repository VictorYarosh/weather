import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardsWeather from "./components/CardsWeather";
import LastScreen from "./components/LastScreen";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const BodyTitle = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <Navbar />
      <BodyTitle>
        <CardsWeather />
        <LastScreen />
      </BodyTitle>

      <Switch>
        <Route exact path="/">
          <CardsWeather />
        </Route>
        <Route path="/about">
          <LastScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
