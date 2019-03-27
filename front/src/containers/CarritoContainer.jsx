import React from 'react';
import { fetchCarrito, comprarCarrito } from '../redux/action-creators/carrito-actions.js';
import { getProducts } from '../redux/action-creators/products-actions';
import { createNewOC } from '../redux/action-creators/action-creator'
import { connect } from 'react-redux';

class CarritoContainer extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createOC = this.createOC.bind(this);
  }
  componentDidMount () {
    console.log('PROPS DEL CARRITO', this.props);
    // this.props.fetchUser()
    this.props.getCarrito(this.props.usuario.id);
    // this.props.getProducts('?modelo=');
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.comprarCarrito(this.props.usuario.id, this.state, this.props.cartProducts);
  }
  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  createOC (producto) {
    this.props.createOC(this.props.cartProducts)
      .then(() => this.props.history.push(`/checkout/${this.props.orden.id}`));
  }
  render () {
    return (
      <div className='contenedorCarrito'>
        <h1>Carrito de compras:</h1>
        <hr />
        <form className='inputCarrito' onSubmit={this.handleSubmit}>
          <div className="carritoContainer">
            {this.props.cartProducts && this.props.cartProducts.map(producto => {
              return (
                <div className="media" key={producto.id}>
                  <img src={producto.imagenes[0]} className="mr-3 imgCarritoList" />
                  <div className="media-body">
                    <h5 className="mt-0">{producto.marca + ' ' + producto.modelo}</h5>
                    <p>{producto.descripcion.slice(0, 30) + '...'}</p>
                  </div>
                  <h5>${producto.precio}</h5>
                  <div>
                    <label>Cantidad:</label>
                    <input type="number" name={producto.id} id='cantidadProd' defaultValue={1} onChange={this.handleChange}/>
                  </div>
                  <div className="containerTrash">
                    <img id='trashUser' src="/utils/garbage.svg"></img>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <button className='pure-material-button-contained' type='submit' onClick={() => this.createOC(this.props.cartProducts)}>Comprar</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cartProducts: state.carrito,
    productos: state.products,
    usuario: state.usuario,
    orden: state.orden
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCarrito: (id) => dispatch(fetchCarrito(id)),
    getProducts: (searchProduct) => dispatch(getProducts(searchProduct)),
    comprarCarrito: (id, cantidad, productos) => dispatch(comprarCarrito(id, cantidad, productos)),
    createOC: (product) => dispatch(createNewOC(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer);
