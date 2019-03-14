import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarContainer extends Component {
  render () {
    return (
      <div className="navbar-light" id= 'navbar-light'>
        <div className="row"> 
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to = '/iPhone' > iPhone </Link> 
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12'>
              <Link to = '/Samsung'> Samsung </Link> 
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to = '/Motorola'> Motorola </Link> 
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to = '/Xiaomi'> Xiaomi </Link> 
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to = '/LG'> LG </Link> 
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12'>
              <Link to = '/Huawei'> Huawei </Link> 
            </div>
          </div>
        </div> 
      </div>
    );
  }
}
