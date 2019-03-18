/* eslint-disable one-var */
import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../redux/action-creators/action-creator';

class Registro extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      domicilio: '',
      email: '',
      password: '',
      isAdmin: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount () {
  //   window.fbAsyncInit = () => {
  //     window.FB.init({
  //       appId: '{534343110422200}',
  //       cookie: true,
  //       xfbml: true,
  //       version: '{1.0.0}'
  //     });
  //     window.FB.AppEvents.logPageView();
  //   };

  //   window.FB.Event.subscribe('auth.statusChange', response => this.statusChangeCallback(response));

  //   this.getLoginStatus();

  //   (function (d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) { return; }
  //     js = d.createElement(s); js.id = id;
  //     js.src = 'https://connect.facebook.net/en_US/sdk.js';
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'facebook-jssdk'));
  // }

  // statusChangeCallback (response) {
  //   this.setState(response);
  // }

  // getLoginStatus () {
  //   window.FB.getLoginStatus((response) => {
  //     this.statusChangeCallback(response);
  //   });
  // }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.registerUser(this.state);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="registro-contenedor">
          <h3 className="FRUstitle"> Completa tus datos... </h3>
          <div className='FRUsuarios'>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Nombre</label>
                <input name='nombre' onChange={this.handleChange} type="text" className="form-control" placeholder="Nombre" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">E-mail</label>
                <input name='email' onChange={this.handleChange} type="text" className="form-control" id="inputEmail4" placeholder="E-mail" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputSurname">Apellido</label>
                <input name='apellido' onChange={this.handleChange} type="text" className="form-control" placeholder="Apellido" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input name='password' onChange={this.handleChange} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Domicilio</label>
              <input name='domicilio' onChange={this.handleChange} type="text" className="form-control" id="inputAddress" placeholder="Domicilio" />
            </div>
            <div className="form-row">
            </div>
            <div className="botones">
              <button type="submit" className="btn btn-primary" >Registrarse</button>
              <div className="fb-login-button" data-size="large" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>
            </div>
          </div>
        </div>
      </form>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  registerUser: (user) => dispatch((registerUser(user)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registro);
