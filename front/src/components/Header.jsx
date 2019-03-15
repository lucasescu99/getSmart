import React from 'react';
import { Link } from 'react-router-dom';
export default ({handleChange}) => (
  <header className='header'>
    <div>
      <Link to='signup'><img id='userLogIn' src="/utils/user.svg"></img></Link>
    </div>
    <Link to='login'><img id='userLogOut' src="/utils/logout.svg"></img></Link>
    <Link to='/' ><img id='logo' src="/utils/logoBlanco.jpg"></img></Link>
    <form method='GET'>
      <input type='search' name= 'modelo' placeholder= 'Busca tu producto 🔎' id='input' onChange = {handleChange}/>
    </form>
    <Link to='cart' ><img id='carrito' src="/utils/carrito.svg"></img></Link>

  </header>

)