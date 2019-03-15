import React from 'react'
import { giveadmAccess } from '../redux/action-creators/action-creator'
import { connect } from 'react-redux'
import store from '../redux/store'

class giveAdmAccess extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState(
      { [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.state
    this.props.giveadmAccess(user)
    console.log(user, 'STAAAATE')
    console.log(store.getState(), 'store')
  }

  render() {
    return (<div>
      <h1 className="FRUstitle"> Ingresa Email para sumar ADM  </h1>
      <div className='FRUsuarios'><form onSubmit={this.handleSubmit} >
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">E-mail</label>
            <input name='email' onChange={this.handleChange} type="text" className="form-control" id="inputEmail4" placeholder="E-mail" />
          </div>
        </div>
        <div className="form-row">
        </div>
        <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Login</button>
      </form>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  giveadmAccess: (user) => dispatch((giveadmAccess(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(giveAdmAccess);