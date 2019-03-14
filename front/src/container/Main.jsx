import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import NavbarContainer from './NavbarContainer';
import NavbarAdmContainer from './NavbarAdmContainer';

export default class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={NavbarContainer}/>
        <Route exact path="/adm" component={NavbarAdmContainer}/>
        <Route exact path="/adm/:adm" render = { ({ match }) => <NavbarAdmContainer searchAdm = {match.params}/> }/>
      </Switch>
    );
  }
}
