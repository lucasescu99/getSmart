import React from 'react';
import { Link } from 'react-router-dom';
export default ({ handleChange }) => (
  <header className='header'>
    <div>
      <Link to='signup' id='linkLogIn'>
        <img id='userLogIn' src="/utils/user.svg"></img>
        <span className="caption">Registrate</span>
      </Link>
    </div>
    <Link to='login' id='linkLogOut'>
      <img id='userLogOut' src="/utils/logout.svg"></img>
      <span className="caption2">Ingresá</span>
    </Link>
    <Link to='/' id='linkLogo' ><img id='logo' src="/utils/logoBlanco.jpg"></img></Link>
    <form method='GET'>
      <input type='search' name='modelo' placeholder='    Busca tu producto 🔎' id='input' onChange={handleChange} />
    </form>
    <Link to='cart' id='linkCart'><img id='carrito' src="/utils/carrito.svg"></img></Link>

  </header>

)