/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Stars from './starRating';
import { Link } from 'react-router-dom';
import { borrarProd } from '../redux/action-creators/products-actions';
import { connect } from 'react-redux';
import { addToCart } from '../redux/action-creators/carrito-actions';
import axios from 'axios';

class SingleProd extends React.Component {
  constructor (props) {
    super(props);
    this.createOC = this.createOC.bind(this);
  }

  createOC (producto) {
    this.props.createOC([producto])
      .then(() => this.props.history.push(`/productos/${this.props.producto.id}/checkout/${this.props.orden.id}`));
  }

  render () {
    const { producto, categorias, onClick } = this.props;
    console.log("////////STore REDUX //////", this.props)
    return (
      <div id="singleProd">

        <div className="row">

          <div className="col-lg-6 col-xs-12">

            <h1 style={{ textAlign: 'center', marginBottom: '10px', borderBottom: '1px solid black', paddingBottom: '7px' }}>{producto.marca} {producto.modelo}</h1>

            <div className="row" style={{ marginTop: '20px' }}>
              <div className="col-lg-6 col-xs-12"><h1 style={{ textAlign: 'center' }}>${producto.precio} </h1></div>
              <div style={{ textAlign: 'center', marginTop: '9px' }} className="col-lg-6 col-xs-12">{producto.stock > 5 ? <h4>Disponible</h4> : <h4>Últimas {producto.stock} unidades</h4>}</div>
            </div>

            <div id="puntuacion" className="row">
              <h3>Puntuación :  </h3>
              <h2 style={{ margin: '0 auto' }}>  <Stars rating={producto.puntuación} /></h2>
            </div>

            <div className="row" style={{ marginTop: '60px' }}>
              <div className="col-lg-5 col-sm-12">
                {this.props.adminInfo
                  ? <div><Link to={`/productos/edit/${producto.id}`}> <button className="btn btn-lg btn-success" type="button" style={{ padding: '20px', margin: '7px' }} > EDITAR </button> </Link>
                    <button onClick={onClick} className="btn btn-lg btn-danger" type="button" style={{ padding: '20px', margin: '7px' }} > ELIMINAR </button> </div>
                  : <button className="btn btn-lg btn-success" type="button" style={{ padding: '20px' }} onClick={() => this.createOC(producto)} > COMPRAR! </button>
                }
              </div>
              <div className="col-lg-7 col-sm-12">
                <button onClick={() => this.props.addToCart(this.props.producto.id, this.props.usuario.id)} className="btn btn-lg" type="button" style={{ color: '#28a745', borderColor: '#28a745', padding: '20px' }}>Agregar al Carrito</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xs-12">
            <Carousel >
              {producto.imagenes.map((imagen, index = 0) => (
                <Carousel.Item key={index++}>
                  <img
                    className="d-block w-100"
                    src={imagen}
                    alt="photos"
                    id="imgProdCarr"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-12 col-xs-12">
            <h3><strong>Descripción : </strong></h3>
            <h5>{producto.descripcion}</h5>
          </div>

        </div>

        <hr />
        <div className="row" >
          <div className="col-lg-6 col-xs-12">
            <h4><strong>Categorias :</strong></h4>
            <ul><h6>
              {categorias && categorias.map((obj, index = 0) => {
                return <li key={index++}>{obj.name}</li>;
              })}
            </h6></ul>

          </div>
          <div className="col-lg-6 col-xs-12">
            <h4><strong>Reviews :</strong></h4><br />
            <h6 className="col-lg-12"><strong>UsuarioX </strong>dijo :
              Me pasé de un samsung s5 a este equipo, con cierta desconfianza. Después de leerme media internet, me animé. Excelente equipo y, mucho más, si tenés en cuenta el costo. Es un equipo rápido, de excelente duración de batería: tres días con una sola carga!!! está bien que no soy fan de instagram y facebook, pero supongo que para un usuario standard tiene que durar 2 días, seguro.</h6>
          </div>
        </div>

      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  rating: state.ratingProd,
  categorias: state.categorias,
  usuario: state.usuario,
  orden: state.orden
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (idProducto, idUsuario) => dispatch(addToCart(idProducto, idUsuario))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProd);
