import React from 'react'

const Login = ({ onChange, onSubmit }) => (
  <div>
    <h1 className="FRUstitle"> ¡Hola! Ingresa tu Email para seguir  </h1>
    <div className='FRUsuarios'><form onSubmit={onSubmit} >
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="email">E-mail</label>
          <input name='email' onChange={onChange} type="text" className="form-control" id="inputEmail4" placeholder="E-mail" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input name='password' onChange={onChange} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
        </div>
      </div>
      <div className="form-row">
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
  </div>
)
export default Login