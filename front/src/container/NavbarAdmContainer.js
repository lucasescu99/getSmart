import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class NavbarAdmContainer extends Component {
  constructor () {
    super();
    this.state = {
    };
  }

  onClick (e) {
    this.searchCategory(e);
  }

  render () {
    return (
      <div className="navbar-light" id= 'navbar-light'>
        <div className="row"> 
          <div className="col-sm-4 nav-link">
            <Link to='/adm/products'> PRODUCTOS </Link> 
          </div>
          <div className="col-sm-4 nav-link">
            <Link to='/adm/purchaseOrders'> ORDENES DE COMPRA </Link> 
          </div>
          <div className="col-sm-4 nav-link">
            <Link to='/adm/users'> USUARIOS </Link> 
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    list: state.list,
    selected: state.selected,
    title: state.title,
    favmovies: state.favmovies
  };
}

function mapDispatchToProps (dispatch) {
  return {
    searchCategory: (click) => dispatch(searchCategory(click))
  };
}

connect(mapStateToProps, mapDispatchToProps)(NavbarAdmContainer);
