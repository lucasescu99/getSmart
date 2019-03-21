/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../redux/action-creators/user-actions';
import axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.fetchUsers();
  }
  render () {
    console.log('PROPS DEL RENDER', this.props);
    return (
      <div className='usersContainer'>
        <ul className="list-group">
          <li className="list-group-item active titleListUsers">LISTA DE USUARIOS</li>
          {this.props.users.map(user => {
            return (
              <li className="list-group-item listItem" key={user.id}>
                <div>
                  <strong className='titlesUsers'> NOMBRE: </strong> {user.nombre} <br />
                  <strong className='titlesUsers'> APELLIDO: </strong> {user.apellido} <br />
                  <strong className='titlesUsers'> EMAIL: </strong> {user.email}
                </div>
                <div className="containerTrash">
                  <img id='trashUser' src="/utils/garbage.svg" onClick={() => this.props.deleteUser(user.id)}></img>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
};

const mapStateToProps = (state) => (
  {
    users: state.users
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUser: (id) => dispatch(deleteUser(id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
