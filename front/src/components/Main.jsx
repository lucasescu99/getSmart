import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import store from 'react-redux'

//components
import Header from './Header';
import Home from './Home';

export default class Main extends React.Component {
  render() {
    return (
      <div id='main' >
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}