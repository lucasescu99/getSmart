import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Redirect, Switch, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import ProductsContainer from './ProductsContainer';
import Home from '../components/Home';
import UserAsAdmin from '../components/UserAsAdmin';
import Header from '../components/Header';

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' >
        <Header />

        <Switch>
          <Route path= '/products' render = {(e) => <ProductsContainer searchProduct= 's7' />}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/usuarios/adadmin' component={UserAsAdmin} />
        </Switch>
      </div>

    );
  }
};
