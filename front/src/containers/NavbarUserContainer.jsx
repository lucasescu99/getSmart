/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { buscarMarcas } from '../redux/action-creators';



class NavbarUserContainer extends Component {
  componentDidMount () {
    this.props.buscarMarcas(marca)
  }

  render () {
    return (
      <div className="navbar-light" id= 'navbar-light'>
        <div className="row">
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to = '/productos/marcas/iPhone' > iPhone </Link>
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12'>
              <Link to = '/productos/marcas/Samsung'> Samsung </Link>
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to = '/productos/marcas/Motorola'> Motorola </Link>
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to = '/productos/marcas/Xiaomi'> Xiaomi </Link>
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to = '/productos/marcas/LG'> LG </Link>
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12'>
              <Link to = '/productos/marcas/Huawei'> Huawei </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  marcas: state.marcas
});

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarUserContainer);
