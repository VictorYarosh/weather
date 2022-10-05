import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/containers/layout';
import WeatherCard from './components/ui/weather-card';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            {<WeatherCard />}
          </Route>
          <Route path="/about"></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
