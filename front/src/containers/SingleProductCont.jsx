/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { buscarProducto, buscarCategorias } from '../redux/action-creators/products-actions';
import { createNewOC } from '../redux/action-creators/action-creator';
import SingleProdComp from '../components/singleProdComp';

class SingleProd extends React.Component {
  componentDidMount () {
    this.props.buscarProd(this.props.prodId);
    this.props.buscarCat(this.props.prodId);
  }

  render () {
    const product = this.props.producto;
    return (
      <div className="container" >
        {product.id ? <SingleProdComp history={this.props.history} ordenId={this.props.ordenId} orden={this.props.orden} createOC={this.props.createOC} user={this.props.user} producto={product} adminInfo={this.props.isAdmin} categorias={this.props.categorias}/> : <h1>Este producto no existe</h1>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  rating: state.ratingProd,
  categorias: state.categorias,
  user: state.usuario,
  orden: state.orden

});

const mapDispatchToProps = (dispatch) => ({
  buscarProd: (prodID) => dispatch(buscarProducto(prodID)),
  buscarCat: (artId) => dispatch(buscarCategorias(artId)),
  createOC: (product) => dispatch(createNewOC(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProd);
