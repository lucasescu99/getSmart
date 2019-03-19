/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Stars from './starRating';
import { Link } from 'react-router-dom';

export default (props) => {
  const producto = props.producto;
  console.log(props);
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
              {props.adminInfo
                ? <Link to={`/productos/edit/${producto.id}`}> <button className="btn btn-lg btn-success" type="button" style={{ padding: '20px', margin: '7px' }} > EDITAR </button> </Link>
                : <Link to={`/checkout/${producto.id}`}><button className="btn btn-lg btn-success" type="button" style={{ padding: '20px' }} > COMPRAR! </button> </Link>}
            </div>

            <div className="col-lg-7 col-sm-12"><button className="btn btn-lg" type="button" style={{ color: '#28a745', borderColor: '#28a745', padding: '20px' }}>Agregar al Carrito</button></div>
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
        <div className="col-lg-6 col-xs-12">
          <h3><strong>Descripción : </strong></h3>
          <h5>{producto.descripcion}</h5>
        </div>
      </div>

      <div className="row" style={{}}>
        <div className="col-lg-6 col-xs-12">
          <h4><strong>Categorias :</strong></h4>
          <h6 className="col-lg-12">{}</h6>
        </div>
        <div className="col-lg-6 col-xs-12">
          <h4><strong>Reviews :</strong></h4><br />
          <h6 className="col-lg-12"><strong>UsuarioX </strong>dijo :
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum saepe, quos tempora perferendis repellendus in libero asperiores voluptatum deleniti voluptatem tenetur voluptatibus consequuntur animi architecto ratione quae maiores dignissimos.</h6>
        </div>
      </div>

    </div>
  );
};
