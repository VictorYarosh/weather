import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/containers/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/about"></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
