import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import styles from './App.module.scss';

import Main from './main'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    );
  }
}

export default App;
