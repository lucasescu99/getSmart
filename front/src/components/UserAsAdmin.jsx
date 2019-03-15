import React from 'react'

class UserAsAdmin extends React.Component {
  render() {
    return (
      <form className='userAsAdm'>
        <h1>Cambio de Perfil de Usuario</h1>
        <div>
          <label className='labelDelAdm'>E-MAIL DE USUARIO:</label>
          <input className='inputDelAdm' type='email' />
        </div>
        <div>
          <img className = 'adminIcons'  src="/utils/user1.svg"></img>
          <button className='botonesAdm btn btn-success' >Hacer Administrador</button>
          <img className = 'adminIcons' src="/utils/userdelete.svg"></img>
          <button className='botonesAdm btn btn-danger'>Eliminar Usuario</button>
        </div>
      </form>
    )
  }
}
export default UserAsAdmin;