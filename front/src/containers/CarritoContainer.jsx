import React from 'react';
import { fetchCarrito } from '../redux/action-creators/carrito-actions.js';
import { getProducts } from '../redux/action-creators/products-actions';
import { connect } from 'react-redux';

class CarritoContainer extends React.Component {
  componentDidMount () {
    console.log('PROPS DEL CARRITO', this.props);
    this.props.getProducts('?modelo=');
  }
  render () {
    return (
      <div className="carritoContainer">
        {this.props.productos && this.props.productos.map(producto => {
          return (
            <div className="media" key={producto.id}>
              <img src={producto.imagenes[0]} className="mr-3 imgCarritoList" />
              <div className="media-body">
                <h5 className="mt-0">{producto.marca + ' ' + producto.modelo}</h5>
                <p>{producto.descripcion.slice(0, 30) + '...'}</p>
              </div>
              <h5>${producto.precio}</h5>
            </div>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cartProducts: state.carrito,
    productos: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCarrito: (id) => dispatch(fetchCarrito(id)),
    getProducts: (searchProduct) => dispatch(getProducts(searchProduct))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer);
