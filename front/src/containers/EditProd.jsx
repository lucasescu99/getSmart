/* eslint-disable no-unused-vars */
import React from 'react';
import FormEditProd from '../components/FormEditProd';
import axios from 'axios';

export default class AdminProd extends React.Component {
  constructor () {
    super();
    this.state = {
      producto: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get(`/api/productos/${this.props.prodId}`)
      .then(producto => this.setState({ producto: producto.data }));
  }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value
      });
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.put('/api/productos/edit/' + this.state.producto.id, {
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
    const { producto } = this.state;
    return (
      <div>
        <FormEditProd
          producto={producto}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    );
  }
}
