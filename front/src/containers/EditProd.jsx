/* eslint-disable no-unused-vars */
import React from 'react';
import FormEditProd from '../components/FormEditProd';
import axios from 'axios';

export default class AdminProd extends React.Component {
  // static getDerivedStateFromProps (props, state) {
  //   return state.id ? state : props.prodId;
  // }
  constructor () {
    super();
    this.state = {
      productoAnterior: {}
      // productoActual: {}

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get(`/api/productos/${this.props.prodId}`)
      .then(producto => this.setState({ productoAnterior: producto.data }));
  }

  handleChange (e) {
    this.setState(
      {
        [e.target.name]: e.target.value }
    );
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.put('/api/productos/edit/' + this.state.productoAnterior.id, {
      marca: this.state.Marca,
      modelo: this.state.Modelo,
      stock: this.state.Stock,
      precio: this.state.Precio,
      imagenes: this.state.Imagen.split(','),
      descripcion: this.state.Descripcion
    });
  }

  render () {
    const { productoAnterior, Marca, Modelo } = this.state;
    return (
      <div>
        <FormEditProd
          productoAnterior={productoAnterior}
          marca= {Marca}
          modelo={Modelo}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    );
  }
}
