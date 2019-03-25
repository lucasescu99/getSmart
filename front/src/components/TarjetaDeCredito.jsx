import React from 'react';
import { Link } from 'react-router-dom';

class TarjetaDeCredito extends React.Component {
  render() {
    return (
      <div >
        <form className='tarjeta container-fluid'>
          <h1 id='metodo' >Método de Pago</h1>
          <div>
            <label htmlFor="inputEmail3">Numero de Tarjeta: </label>
            <input className='numerodetarjeta' type="text" maxLength = '16' />
          </div>
          <div className='datosTarjeta'>
            <div>
              <label>Fecha de Vencimiento: </label>
              <input className='fecha' type="date" id="vencimiento" />
            </div>
            <div>
              <label htmlFor="inputPassword5">Codigo de Seguridad: </label>
              <input className='fecha' type="text" id="inputPassword5" maxLength ='4' aria-describedby="passwordHelpBlock" />
              <small id="passwordHelpBlock" className="form-text text-muted note">
                Ultimos 3 digitos en el dorso de la tarjeta
            </small>
            </div>
            <img id='dorsoTarjeta' src='/utils/dorsoTarjeta.svg'></img>
          </div>
          <h1 id='datos'>Datos Titular de la Tarjeta</h1>
          <div>
            <label htmlFor="inputEmail3">Nombre Completo:</label>
            <input className='numerodetarjeta' type="text" />
          </div>
          <div>
            <label htmlFor="inputEmail3">DNI Titular:</label>
            <input id='dni' type="text" />
          </div>
          <button type="button" class="btn btn-success finCompra" onClick={(e) => {
            e.preventDefault()
            alert("Tu compra se ha realizado con éxito!")
            this.props.history.push('/')
          }}>FINALIZAR COMPRA</button>
        </form>
      </div>
    )
  }
}
export default TarjetaDeCredito;