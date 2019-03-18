/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Route } from 'react-router-dom';

export default () => {
  const handleSubmit = (e, red) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    red.push(`/productos?modelo=${e.target.input.value}`);
  };
  return (
    <header className='header'>
      <div>
        <Link to='/usuarios/registro' id='linkLogIn'>
          <img id='userLogIn' src="/utils/user.svg"></img>
          <span className='caption'>Registrate</span>
        </Link>
      </div>
      <Link to='/usuarios/login' id='linkLogOut'>
        <img id='userLogOut' src="/utils/logout.svg"></img>
        <span className='caption2'>Ingresá</span>
      </Link>
      <Link to='/' id='linkLogo' ><img id='logo' src="/utils/logoBlanco.jpg"></img></Link>
      <Route render={({ history }) => {
        return (
          <form method='GET' onSubmit={(e) => handleSubmit(e, history)}>
            <input name='modelo' placeholder='    Busca tu producto 🔎' id='input' />
          </form>
        );
      }
      } />
      <Link to='cart' id='linkCart'><img id='carrito' src="/utils/carrito.svg"></img></Link>

    </header>
  );
};
