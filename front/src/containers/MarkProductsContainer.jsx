import React, { Component } from 'react';
import { connect } from 'react-redux';

class MarkProductsContainer extends Component {

  componentDidMount () {
    console.log(this.props.products)
  }

  render () {
    console.log(this.props)
    return (
      <div>

      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  products: state.products
});
const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkProductsContainer);
