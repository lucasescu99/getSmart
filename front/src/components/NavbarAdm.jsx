import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarUser extends Component {
  render () {
    return (
      <div className="navbar-light" id= 'navbar-light'>
        <div className="row"> 
          <div className="col-sm-3 nav-link">
            <div className='col-lg-12 '>
              <Link to='/adm/products' onClick = { this.handleClick }>PRODUCTO</Link> 
            </div>
          </div>
          <div className="col-sm-3 nav-link">
            <div className='col-lg-12 '>
              <Link to='/adm/createProduct' onClick = { this.handleClick }>CREAR PRODUCTO</Link> 
            </div>
          </div>
          <div className="col-sm-3 nav-link">
            <div className='col-lg-12 '>
              <Link to='/adm/purchaseOrders' onClick = { this.handleClick }>ORDENES DE COMPRA</Link> 
            </div>
          </div>
          <div className="col-sm-3 nav-link">
            <div className='col-lg-12 '>
              <Link to='/adm/users' onClick = { this.handleClick }>USUARIOS</Link> 
            </div>  
          </div>
        </div>
      </div>
    );
  }
}
