import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Switch>
                <Route path="/" component={Home}/>
              </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;