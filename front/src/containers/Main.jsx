import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SingleProd from '../containers/SingleProductCont';

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='container-fluid'>
        <Switch>
          <Route path="/productos/:chota" render={({ match }) => <SingleProd prodId={match.params.chota}/>} />
        </Switch>
      </div>
    );
  }
};
