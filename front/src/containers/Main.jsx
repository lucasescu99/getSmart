/* eslint-disable no-unused-vars */
import React from 'react';
import CrearProd from './CrearProd';
import EditProd from './EditProd';

// eslint-disable-next-line no-unused-vars
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import Home from '../components/Home';
import UserAsAdmin from '../components/UserAsAdmin';
import Header from '../components/Header';
import SingleProd from '../containers/SingleProductCont';
import NavbarContainer from '../containers/NavbarContainer';

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='container-fluid'>
        <Header />
        <NavbarContainer isAdmin = {true}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path= '/productos' render = {({ location }) => <ProductsContainer location= {location}/>}/>
          <Route exact path='/usuarios/addadmin' component={UserAsAdmin} />
          <Route exact path ='/productos/add' render={() => (<CrearProd />)} />
          <Route exact path ='/productos/edit/:id' render={({ match }) => (<EditProd prodId={match.params.id} />)} />
          <Route path="/productos/:id" render={({ match }) => <SingleProd prodId={match.params.id}/>} />
        </Switch>
      </div>

    );
  }
};
