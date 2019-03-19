/* eslint-disable no-unused-vars */
import React from 'react';
import { checkUserLogin } from '../redux/action-creators/action-creator';
import { connect } from 'react-redux';
import store from '../redux/store';
import { withRouter, Link } from 'react-router-dom'

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = this.state;
    this.props.checkUserLogin(user)
      .then(() => {
        this.props.history.push('/');
      })
    ;
  }

  render () {
    return (<div>
      <h1 className="FRUstitle"> ¡Hola! Ingresa tu Email para seguir  </h1>
      <div className='FRUsuarios'><form onSubmit={this.handleSubmit} >
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">E-mail</label>
            <input name='email' onChange={this.handleChange} type="text" className="form-control" id="inputEmail4" placeholder="E-mail" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input name='password' onChange={this.handleChange} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-row">
        </div>
        <Link to='/'><button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary" >Login</button></Link>
      </form>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  userCheck: state.userCheck
});
const mapDispatchToProps = (dispatch) => ({
  checkUserLogin: (user) => dispatch((checkUserLogin(user)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
