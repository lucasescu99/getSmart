/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { buscarProducto, buscarCategorias } from '../redux/action-creators/products-actions';
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
        {product.id ? <SingleProdComp producto={product} adminInfo={this.props.isAdmin} categorias={this.props.categorias}/> : <h1>Este producto no existe</h1>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  rating: state.ratingProd,
  categorias: state.categorias

});

const mapDispatchToProps = (dispatch) => ({
  buscarProd: (prodID) => dispatch(buscarProducto(prodID)),
  buscarCat: (artId) => dispatch(buscarCategorias(artId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProd);
