import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import Home from '../components/Home';
import UserAsAdmin from '../components/UserAsAdmin';
import Header from '../components/Header';
import SingleProd from '../containers/SingleProductCont';

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='container-fluid'>
        <Header />
        <Switch>
          <Route path= '/products' render = {(e) => <ProductsContainer searchProduct= 's7' />}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/usuarios/addadmin' component={UserAsAdmin} />
          <Route path="/productos/:chota" render={({ match }) => <SingleProd prodId={match.params.chota}/>} />
        </Switch>
      </div>

    );
  }
};
