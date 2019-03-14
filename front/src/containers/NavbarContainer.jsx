import React from 'react';

import NavbarUser from '../components/NavbarUser';
import NavbarAdm from '../components/NavbarAdm';

export default class NavbarContainer extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.isAdmin ? <NavbarAdm/> : <NavbarUser/>
        }
      </div>
    );
  }
}
