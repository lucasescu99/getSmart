import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Redirect, Switch, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import ProductsContainer from './ProductsContainer';
export default class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route path= '/products' render = {(e) => <ProductsContainer searchProduct= 's7' />}/>;
      </Switch>
    );
  }
};
