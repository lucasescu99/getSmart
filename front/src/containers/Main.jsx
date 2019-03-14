import React from 'react';
import store from 'react-redux'
import Home from './Home'
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import HomeRL from './HomeRl';
import Registro from '../components/Registro'
import FormularioLogin from './FormularioLogin'
import Login from '../components/Login'

export default class Main extends React.Component {
  render() {
    return (
      <div id='main' className='container-fluid'>
        <Route exact path="/user" render={() => (<HomeRL />)} />
        <Switch>
        <Route exact path="/user/register" render={() => (<Registro />)} />
        <Route exact path="/user/login" render={() => (<Login />)} />
        </Switch>
      </div>
    )
  }
}
