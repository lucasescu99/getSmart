import axios from 'axios';
import { CHECK_USER, ADD_USER, ADM_ACCESS, GET_USER } from '../constants';

export const addUser = (user) => ({
  type: ADD_USER,
  user
});

export const checkUser = (data) => ({
  type: CHECK_USER,
  data
});

export const admAccess = (qty) => ({
  type: ADM_ACCESS,
  qty
});

export const getUser = (usuario) => ({
  type: GET_USER,
  usuario
});

export const giveadmAccess = (data) => dispatch =>
  axios.post('/api/usuarios/esAdm', data)
    .then(res => {
      return res;
    });

export const registerUser = (user) => dispatch =>
  axios.post('/api/usuarios/crea', { user })
    .then(res => res.data)
    .then(user => dispatch(addUser(user)));

export const checkUserLogin = (data) => dispatch =>
  axios.post('/api/usuarios/login', data)
    .then(res => {
      return res.data;
    })
    .then(data => dispatch(getUser(data)));

export const fetchUser = () => dispatch =>
  axios.get('/api/usuarios/user')
    .then(res => res.data)
    .then(usuario => dispatch(getUser(usuario)));

export const postNewComment = (comment) =>
  axios.post('/api/reviews/newComment', { comment })
    .then(post => post.data);
