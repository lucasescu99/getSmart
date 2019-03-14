import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import store from 'react-redux'
import SingleProd from '../components/singleProduct'

export default class Main extends React.Component {
  render() {
    return (
      <div id='main' className='container-fluid'>
        <Switch>
          <Route path="/products/:id" render={() => <SingleProd />} />
        </Switch>
      </div>
    );
  }
};
