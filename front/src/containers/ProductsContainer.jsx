import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/action-creators/products-actions';
// eslint-disable-next-line no-unused-vars
import Products from '../components/Products';
import axios from 'axios';

class ProductsContainer extends React.Component {
  componentDidMount () {
    axios.post('/products/addpr');
    this.props.getProducts(this.props.searchProduct);
  };

  render () {
    return (
      <div className="container">
        <h1>PRODUCTOS</h1>
        <hr/>
        <div className="products">
          { (this.props.products[0]) ? <Products products={this.props.products} /> : null };
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    getProducts: (product) => dispatch(getProducts(product))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
