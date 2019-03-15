import React from 'react';
import { Route, Redirect, Switch, Link,withRouter } from 'react-router-dom';
import HomeRL from './HomeRL';
import Registro from '../components/Registro'
import Login from '../components/Login'
import GiveAdmAccess from '../components/GiveAdmAccess';


export default class Main extends React.Component {
  render() {
    return (
      <div id='main' className='container-fluid'>
        <Switch>
        <Route exact path="/user" render={() => (<HomeRL />)} />
        <Route exact path="/user/register" render={() => (<Registro />)} />
        <Route exact path="/user/login" render={() => (<Login />)} />
        <Route exact path="/user/makeAdmin" render={() => (<GiveAdmAccess />)} />
        </Switch>
      </div>
    )
  }
}
