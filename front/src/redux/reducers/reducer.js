import { CHECK_USER, ADD_USER, ADM_ACCESS } from '../constants';

const initialState = {
  userCheck: {},
  user: {},
  access: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER:
      return Object.assign({}, state, { userCheck: action.user });
    case ADD_USER:
      return Object.assign({}, state, { user: action.user });
    case ADM_ACCESS:
      return Object.assign({}, state, { access: action.qty });
    default:
      return state;
  }
}
