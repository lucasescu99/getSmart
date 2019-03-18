/* eslint-disable no-unused-vars */
import React from 'react';
import FormEditProd from '../components/FormEditProd';
import FormCrearProd from '../components/FormCrearProd';
import axios from 'axios';

export default class AdminProd extends React.Component {
  constructor () {
    super();
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState(

      {
        [e.target.name]: e.target.value
      });
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.post('/api/productos/add', {
      marca: this.state.Marca,
      modelo: this.state.Modelo,
      stock: this.state.Stock,
      precio: this.state.Precio,
      imagenes: this.state.Imagen.split(','),
      descripcion: this.state.Descripcion
    })
      .then(product => {
        this.props.history.push(`/productos/${product.data.id}`);
      });
  }

  render () {
    console.log(this.props.e);
    return (
      <div>
        <FormCrearProd
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    );
  }
}
