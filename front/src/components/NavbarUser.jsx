/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarContainer extends Component {
  render () {
    return (
      <div className="navbar-light navbarUser" id='navbar-light'>
        <div className="nav-link">
          <div >
            <Link to='/productos' > Todos </Link>
          </div>
        </div>
        <div className="nav-link">
          <div >
            <Link to='/iPhone' > iPhone </Link>
          </div>
        </div>
        <div className="nav-link">
          <div>
            <Link to='/Samsung'> Samsung </Link>
          </div>
        </div>
        <div className="nav-link">
          <div>
            <Link to='/Motorola'> Motorola </Link>
          </div>
        </div>
        <div className="nav-link">
          <div >
            <Link to='/Xiaomi'> Xiaomi </Link>
          </div>
        </div>
        <div className="nav-link">
          <div >
            <Link to='/LG'> LG </Link>
          </div>
        </div>
        <div className="nav-link">
          <div>
            <Link to='/Huawei'> Huawei </Link>
          </div>
        </div>
      </div>
    );
  }
};
