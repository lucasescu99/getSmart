import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { userInfo } from 'os';

export default (props) => {
  const prueba = {
    marca: 'Samsung',
    modelo: 'S8',
    descripcion: 'El Samsung Galaxy S8 introduce un elegante diseño con una innovadora pantalla de 5.8 pulgadas que va de extremo a extremo, eliminando los bordes, para brindarte una experiencia visual inmersiva y envolvente. Presenta, además, sus nuevos sistemas de bloqueo a través de reconocimiento facial y escaneo de iris diseñados exclusivamente para una seguridad integral.',
    stock: 3,
    precio: '25.000',
    imagenes: ['https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/galaxy-s8/black/device-left.png.transform/pdpCarousel/image.jpg', 'https://imagenes.coolmod.com/samsung-galaxy-s8plus-4g-64gb-libre-gris-orquadea-smartphone-mavil-001.jpg']
  };

  return (
    <div className="container" >
      <div id="singleProd">

        <div className="row">

          <div className="col-lg-6 col-xs-12">

            <h1 style={{ textAlign: 'center', marginBottom: '10px', borderBottom: '1px solid black', paddingBottom: '7px' }}>{prueba.marca} {prueba.modelo}</h1>

            <div className="row" style={{ marginTop: '20px' }}>
              <div className="col-lg-6 col-xs-12"><h1 style={{ textAlign: 'center' }}>${prueba.precio} </h1></div>
              <div style={{ textAlign: 'center', marginTop: "9px" }} className="col-lg-6 col-xs-12">{prueba.stock > 5 ? <h4>Disponible</h4> : <h4>Últimas {prueba.stock} unidades</h4>}</div>
            </div>

            <div id="puntuacion">
              <h3>Puntuación : (S)(S)(S)(S)</h3>
            </div>

            <div className="row" style={{ marginTop: "60px" }}>
              <div className="col-lg-5"><button className="btn btn-lg btn-success" type="button" style={{ padding: "20px" }} >COMPRAR!</button></div>
              <div className="col-lg-7"><button className="btn btn-lg" type="button" style={{ color: "#28a745", borderColor: "#28a745", padding: "20px" }}>Agregar al Carrito</button></div>
            </div>

          </div>

          <div className="col-lg-6 col-xs-12">
            <Carousel >
              {prueba.imagenes.map((imagen, index = 0) => (
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
          <h3><strong>Descripción : </strong></h3>
          <h5>{prueba.descripcion}</h5>
        </div>


        <div className="row" style={{}}>
          <h3><strong>Reviews :</strong></h3><br/>
          <h5 className="col-lg-12"><strong>UsuarioX </strong>dijo :
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum saepe, quos tempora perferendis repellendus in libero asperiores voluptatum deleniti voluptatem tenetur voluptatibus consequuntur animi architecto ratione quae maiores dignissimos.</h5>
        </div>

      </div>
    </div>
  );
};
