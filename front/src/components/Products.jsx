// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

export default ({ products }) => (
  products.map(product => (
    <Link to={`/products/${product.id}`}>
      <div className="product" key={product.id}>
        <div className="card">
          <img src={`${product.imagenes[0]}`} className="card-img-top imgproduct" />
          <div className="card-body">
            <h5 className="card-title"> {product.marca + ' ' + product.modelo} </h5>
            <p className="card-text"> {product.descripcion} </p>
            <Link to={`/products/${product.id}`} className="btn btn-primary"> Go somewhere </Link>
          </div>
        </div>
      </div>
    </Link>
  ))
);
