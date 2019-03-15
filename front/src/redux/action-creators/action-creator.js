import axios from 'axios';
import { CHECK_USER, ADD_USER, ADM_ACCESS } from '../constants';

export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const checkUser = (user) => ({
  type: CHECK_USER,
  user,
});

export const admAccess = (qty) => ({
  type: ADM_ACCESS,
  qty,
});


export const giveadmAccess = (data) => dispatch =>
axios.post('/usuarios/esAdm', data)
    .then(res => res.data[0])
    .then(qtyUpdated => dispatch(admAccess(qtyUpdated)))

export const registerUser = (user) => dispatch =>
  axios.post('/usuarios/crea', { user })
    .then(res => res.data)
    .then(user => dispatch(addUser(user)))

export const checkUserLogin = (data) => dispatch =>
  axios.post('/usuarios/login', data)
    .then(res => res.data)
    .then(user => { 
      return dispatch(checkUser(user))})