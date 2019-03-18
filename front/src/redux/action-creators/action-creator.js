import axios from 'axios';
import { CHECK_USER, ADD_USER, ADM_ACCESS } from '../constants';

export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const checkUser = (data) => ({
  type: CHECK_USER,
  data,
});

export const admAccess = (qty) => ({
  type: ADM_ACCESS,
  qty,
});

export const setUser = (usuario) => ({
  type: 'SET_USER',
  user
})


export const giveadmAccess = (data) => dispatch =>
  axios.post('/api/usuarios/esAdm', data)
    .then(res => {
      return res
    })

export const registerUser = (user) => dispatch =>
  axios.post('/api/usuarios/crea', { user })
    .then(res => res.data)
    .then(user => dispatch(addUser(user)))

export const checkUserLogin = (data) => dispatch =>
  axios.post('/api/usuarios/login', data)
    .then(res => {
      console.log(res, 'reeeeeeeeeeeeeeeeeeeeeeeeeees')
      return res.data
    })
    .then(data => dispatch(checkUser(data)))

export const getUser = () => dispatch =>
  axios.get('/api/usuarios/user')
    .then(usuario =>
      dispatch(addUser(usuario.data)))

export const cookieIsAdmin = () => dispatch =>
  axios.get('/api/usuarios/getcookies')
    .then(cookie => cookie.userIsAdmin)

// export const setUserLogin = (userCheck) => dispatch =>
// localStorage
//     })
//     .then(status => dispatch(checkUser(status)))
