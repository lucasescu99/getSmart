import axios from 'axios';

export const setProducts = (products) => (
  {
    type: 'SET_PRODUCTS',
    products
  }
);

export const getProducts = (searchProduct) => dispatch => {
  return axios.get(`/products/${searchProduct}`)
    .then(res => {
      dispatch(setProducts(res.data));
    });
};
