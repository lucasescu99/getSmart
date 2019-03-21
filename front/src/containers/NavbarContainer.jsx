import React from 'react';
import { connect } from 'react-redux';
import NavbarUserContainer from '../containers/NavbarUserContainer';
import NavbarAdm from '../components/NavbarAdm';
import { checkUserLogin } from '../redux/action-creators/action-creator';

class NavbarContainer extends React.Component {
  render () {
    return (
      <div>
        { this.props.isAdmin ? <NavbarAdm /> : <NavbarUserContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  userCheck: state.userCheck
});
const mapDispatchToProps = (dispatch) => ({
  checkUserLogin: (user) => dispatch((checkUserLogin(user)))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
