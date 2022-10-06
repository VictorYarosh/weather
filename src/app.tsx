import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/containers/layout';
import Weather from './components/complex/main/weather';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            {<Weather />}
          </Route>
          <Route path="/about"></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
