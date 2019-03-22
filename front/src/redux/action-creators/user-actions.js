import axios from 'axios';

const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const fetchUsers = () => dispatch => {
  return axios.get('/api/usuarios/all')
    .then(res => res.data)
    .then(users => {
      dispatch(setUsers(users));
    });
};

export const deleteUser = (id) => dispatch => {
  return axios.delete(`/api/usuarios/${id}`);
};
