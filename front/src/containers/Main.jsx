/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import CrearProd from './CrearProd';
import HomeRL from './HomeRL';
import EditProd from './EditProd';
import Registro from '../components/Registro';
import Login from '../components/Login';
import Home from '../components/Home';
import UserAsAdmin from '../components/UserAsAdmin';
import Header from '../components/Header';
import SingleProd from '../containers/SingleProductCont';
import NavbarContainer from '../containers/NavbarContainer';
import { getUser } from '../redux/action-creators/action-creator'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import MetodosDePago from '../components/MetodosDePago';

class Main extends React.Component {
    // testAPI () {
  //   window.FB.api('/me', function (response) {
  //   });
  // }
  // statusChangeCallback (response) {
  //   this.testAPI();
  // }
  // componentDidMount () {
  //   window.FB.getLoginStatus((response) => {
  //     this.statusChangeCallback(response);
  //   });
  // }
  render() {
    return (
      <div id='main' className='container-fluid'>
        <Header />
        <NavbarContainer/>
        <Switch>
          <Route exact path="/usuarios" render={() => (<HomeRL />)} />
          <Route exact path="/usuarios/registro" render={() => (<Registro />)} />
          <Route exact path="/usuarios/login" render={() => (<Login />)} />
          <Route exact path='/' component={Home} />
          <Route exact path='/productos' render={({ location }) => <ProductsContainer location={location} />} />
          <Route exact path='/usuarios/addadmin' component={UserAsAdmin} />
          <Route exact path='/productos/add' render={({ history }) => (<CrearProd history = { history}/>)} />
          <Route exact path='/productos/edit/:id' render={({ match, history }) => (<EditProd history={ history } prodId={match.params.id} />)} />
          <Route path="/productos/:id" render={({ match }) => <SingleProd prodId={match.params.id} isAdmin={true} />} />
          <Route path="/pagos/" component={MetodosDePago} />} />
        </Switch>
      </div >
    );
  }
};



const mapStateToProps = (state) => ({
  user: state.user,
  userCheck: state.userCheck
});
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch((getUser()))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
