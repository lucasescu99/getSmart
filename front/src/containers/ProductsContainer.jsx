import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/action-creators/products-actions';
// eslint-disable-next-line no-unused-vars
import Products from '../components/Products';

class ProductsContainer extends React.Component {
  componentDidMount () {
    console.log('PROPS DEL CONTAINER', this.props);
    this.props.getProducts(this.props.search);
  };

  render () {
    console.log('PROPS EN EL RENDER', this.props);
    return (
      <div className="container">
        <h1 className='titleProduct'>PRODUCTOS</h1>
        <hr/>
        <div className="products">
          { (this.props.products[0]) ? <Products products={this.props.products} /> : null }
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
    getProducts: (searchProduct) => dispatch(getProducts(searchProduct))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
