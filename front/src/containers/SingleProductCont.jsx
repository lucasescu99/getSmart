/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { buscarProducto } from '../redux/action-creators/products-actions';
import SingleProdComp from '../components/singleProdComp';

class SingleProd extends React.Component {
  componentDidMount () {
    this.props.buscarProd(this.props.prodId);
  }

  render () {
    console.log(this.props);
    const product = this.props.producto;
    return (
      <div className="container" >
        {product.id ? <SingleProdComp producto={product}/> : <h1>Este producto no existe</h1>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  rating: state.ratingProd
});

const mapDispatchToProps = (dispatch) => ({
  buscarProd: (prodID) => dispatch(buscarProducto(prodID))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProd);
