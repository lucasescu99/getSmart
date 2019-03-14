/* eslint-disable no-unused-vars */
import React from 'react';
import CrearProd from './CrearProd';
import EditProd from './EditProd';
import { Route } from 'react-router-dom';

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='container-fluid'>
        <Route exact path ='/productos/add' render={() => (<CrearProd />)} />
        <Route exact path ='/productos/edit/:id' render={({ match }) => (<EditProd prodId={match.params.id} />)} />
      </div>
    );
  }
}
