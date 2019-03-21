import axios from 'axios';

const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const fetchUsers = () => dispatch => {
  console.log('hola entre al fetch');
  axios.get('/api/usuarios/all')
    .then(res => res.data)
    .then(users => {
      dispatch(setUsers(users));
    });
};

export const deleteUser = (id) => dispatch => {
  axios.delete(`/api/usuarios/${id}`);
};
