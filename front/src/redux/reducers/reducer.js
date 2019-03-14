import { RECEIVE_PRODUCT } from '../constants';

const initialState = {
  list: [],
  selectedProd: {},
  title: '',
  favmovies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { selectedProd: action.product });
    default:
      return state;
  }
}