/* eslint-disable no-unused-vars */
import React from 'react';
import EditProd from './EditProd';
import CreateCat from './CreateCat';

// eslint-disable-next-line no-unused-vars
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import CrearProd from './CrearProd';
import HomeRL from './HomeRL';
import Registro from '../components/Registro';
import Login from '../components/Login';
import Home from '../components/Home';
import UserAsAdmin from '../components/UserAsAdmin';
import Header from '../components/Header';
import SingleProd from '../containers/SingleProductCont';
import NavbarContainer from '../containers/NavbarContainer';
import { getUser, checkUserLogin, fetchUser } from '../redux/action-creators/action-creator';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import MetodosDePago from '../components/MetodosDePago';
// import DetalleDeCompra from '../components/DetalleDeCompra';
import Checkout from '../components/Checkout';
import TarjetaDeCredito from '../components/TarjetaDeCredito';

class Main extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount () {
    this.props.fetchUser()
      .then(() =>
        this.setState({
          loading: false
        }));
  }

  render () {
    console.log(this.props.usuario);
    return (
      this.state.loading ? <h2>Loading...</h2>
        : <div id='main' className='container-fluid'>
          <Route render= {({ history }) => (<Header login={this.props.usuario.id} history={history} fetchUser={this.props.fetchUser} />)} />
          <NavbarContainer isAdmin={this.props.usuario.isAdmin} />
          <Switch>
            <Route exact path="/usuarios" render={() => (<HomeRL />)} />
            <Route exact path="/usuarios/registro" render={({ history }) => (<Registro history={history} />)} />
            <Route exact path="/usuarios/login" render={({ history, location }) => (<Login history={history} location={location} />)} />
            <Route exact path='/' component={Home} />
            <Route exact path= '/categorias/add' render={() => (<CreateCat />)} />
            <Route exact path='/productos' render={({ location }) => <ProductsContainer location={location} />} />
            <Route exact path='/usuarios/addadmin' render={({ history }) => (<UserAsAdmin history={history}/>)} />
            <Route exact path='/productos/add' render={() => (<CrearProd />)} />
            <Route exact path='/productos/edit/:id' render={({ match }) => (<EditProd prodId={match.params.id} />)} />
            <Route path="/productos/:id" render={({ match }) => <SingleProd prodId={match.params.id} isAdmin={this.props.usuario.isAdmin} />} />
            <Route path="/pagos/" component={Checkout} />} />
            <Route exact path='/tarjeta' component={TarjetaDeCredito} />
          </Switch>
        </div >
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.user,
  userCheck: state.userCheck,
  usuario: state.usuario
});
const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  checkUser: () => dispatch(checkUserLogin())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
