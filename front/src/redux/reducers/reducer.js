import { RECEIVE_PRODUCT } from '../constants';

const initialState = {
  products: [],
  selectedProd: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return Object.assign({}, state, { products: action.products });
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { selectedProd: action.product });
    default:
      return state;
  }
};
