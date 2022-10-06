import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/containers/layout';
import GlobalStyle from './global-styled/global.styles';
import { Weather } from './components/complex/weather';

function App() {
  return (
    <Router>
      <GlobalStyle />
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
