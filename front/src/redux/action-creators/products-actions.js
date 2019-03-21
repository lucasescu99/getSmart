import axios from 'axios';
import { RECEIVE_PRODUCT, SET_PRODUCTS, SET_CATEGORIAS, SEARCH_MARK } from '../constants';

export const setProducts = (products) => (
  {
    type: SET_PRODUCTS,
    products
  }
);

const recibirProducto = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

const setCategorias = (categorias) => ({
  type: SET_CATEGORIAS,
  categorias
});

const buscarMarca = (marcas) => ({
  type: SEARCH_MARK,
  marcas
});

export const getProducts = (searchProduct) => dispatch => {
  return axios.get(`/api/productos${searchProduct}`)
    .then(res => {
      dispatch(setProducts(res.data));
    });
};

export const buscarProducto = prodID => dispatch =>
  axios.get(`/api/productos/${prodID}`)
    .then(res => res.data)
    .then(producto => dispatch(recibirProducto(producto)));

export const buscarCategorias = prodId => dispatch =>
  axios.get(`/api/categorias/${prodId}`)
    .then(info => info.data)
    .then(categorias => dispatch(setCategorias(categorias)));

export const buscarMarcas = markProd => dispatch =>
  axios.get(`/api/productos/marcas/${markProd}`)
    .then(res => res.data)
    .then(marca => dispatch(buscarMarca(marca)));
