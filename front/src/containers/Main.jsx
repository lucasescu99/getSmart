/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import CrearProd from './CrearProd';
import HomeRL from './HomeRL';
import EditProd from './EditProd';
import Registro from '../components/Registro';
import Login from '../components/Login';
import Home from '../components/Home';
import UserAsAdmin from '../components/UserAsAdmin';
import Header from '../components/Header';
import SingleProd from '../containers/SingleProductCont';
import NavbarContainer from '../containers/NavbarContainer';
import GiveAdmAccess from '../components/GiveAdmAccess';

export default class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      response: {}
    };
  }
  // testAPI () {
  //   window.FB.api('/me', function (response) {
  //   });
  // }
  // statusChangeCallback (response) {
  //   this.testAPI();
  // }
  // componentDidMount () {
  //   window.FB.getLoginStatus((response) => {
  //     this.statusChangeCallback(response);
  //   });
  // }
  render () {
    return (
      <div id='main' className='container-fluid'>
        <Header />
        <NavbarContainer isAdmin={false} />
        <Switch>
          <Route exact path="/user" render={() => (<HomeRL />)} />
          <Route exact path="/user/register" render={() => (<Registro user={this.state.response}/>)} />
          <Route exact path="/user/login" render={() => (<Login />)} />
          <Route exact path='/user/addadmin' component={UserAsAdmin} />
          <Route exact path="/user/makeAdmin" render={() => (<GiveAdmAccess />)} />
          <Route exact path='/productos' render={({ location }) => <ProductsContainer location={location} />} />
          <Route exact path='/productos/add' render={() => (<CrearProd />)} />
          <Route exact path='/productos/edit/:id' render={({ match }) => (<EditProd prodId={match.params.id} />)} />
          <Route path="/productos/:id" render={({ match }) => <SingleProd prodId={match.params.id} />} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div >
    );
  }
};
