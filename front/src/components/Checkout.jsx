import React from 'react';
import DatosDelCliente from './DatosDelCliente';
import DetalleDeCompra from './DetalleDeCompra';
import { fetchOrder } from '../redux/action-creators/action-creator';
import { connect } from 'react-redux';
import { buscarProducto } from '../redux/action-creators/products-actions';

class Checkout extends React.Component {
  componentDidMount() {
    this.props.fetchOC(this.props.ordenId);
  }

  render() {
    return (
      <div className='checkoutview' style={{width:"100vw"}} >
          <div className='datosgrid'><DatosDelCliente user={this.props.user} idOC={this.props.ordenId} /></div>
          <div className='datosgrid'><DetalleDeCompra prod={this.props.producto} orden={this.props.orden} /></div>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  orden: state.orden,
  user: state.usuario
});

const mapDispatchToProps = (dispatch) => ({
  fetchOC: (id) => dispatch(fetchOrder(id)),
  fetchProd: (id) => dispatch(buscarProducto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
