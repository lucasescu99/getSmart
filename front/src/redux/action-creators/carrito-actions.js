import axios from 'axios';

const setCarrito = (carrito) => {
  return {
    type: 'SET_CARRITO',
    carrito
  };
};

export const fetchCarrito = (id) => dispatch => {
  axios.get(`/api/carrito/${id}`)
    .then(res => res.data)
    .then(carrito => dispatch(setCarrito(carrito)));
};
