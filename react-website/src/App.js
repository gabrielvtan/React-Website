import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Graph from './containers/Graphs/Graph';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Switch>
                <Route path="/graphs" component={Graph}/>
                <Route path="/" component={Home}/>
              </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
