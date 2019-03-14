import axios from 'axios';
import { RECEIVE_PRODUCT } from '../constants';
import store from '../store';

const recibirProducto = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

export const buscarProducto = prodID => dispatch =>
  axios.get(`/productos/search/${prodID}`)
    .then(res => res.data)
    .then(producto => dispatch(recibirProducto(producto)));
