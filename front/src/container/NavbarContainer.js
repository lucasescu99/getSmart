import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class NavbarComponent extends Component {
  render () {
    return (
      <div className="navbar-light" id= 'navbar-light'>
        <div className="row"> 
          <div className="col-sm-2 nav-link">
            <Link to = '/iPhone' render = { ({ match }) => {}}> iPhone </Link> 
          </div>
          <div className="col-sm-2 nav-link">
            <Link to = '/Samsung'> Samsung </Link> 
          </div>
          <div className="col-sm-2 nav-link">
            <Link to = '/Motorola'> Motorola </Link> 
          </div>
          <div className="col-sm-2 nav-link">
            <Link to = '/Xiaomi'> Xiaomi </Link> 
          </div>
          <div className="col-sm-2 nav-link">
            <Link to = '/LG'> LG </Link> 
          </div>
          <div className="col-sm-2 nav-link">
            <Link to = '/Huawei'> Huawei </Link> 
          </div>
        </div> 
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    list: this.state.list,
    selected: this.state.selected,
    title: this.state.title,
    favmovies: this.state.favmovies
  };
}

function mapDispatchToProps (dispatch) {
  return {

  };
}

connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
