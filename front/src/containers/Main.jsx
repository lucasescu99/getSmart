import React from 'react';
import NavbarContainer from '../containers/NavbarContainer'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <NavbarContainer isAdmin = {true}/>
      </div>
    );
  }
}
