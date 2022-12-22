import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './components/ui/global.styles';
import { Layout } from './components/containers/layout';
import { Weather } from './components/complex/weather';
import { MapUkraine } from './components/complex/map-ukraine';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Weather />
          </Route>
          <Route path="/map-ukraine">
            <MapUkraine />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
