import { CHECK_USER, ADD_USER, ADM_ACCESS, RECEIVE_PRODUCT, GET_USER, SET_PRODUCTS, SET_CATEGORIAS, SEARCH_MARK } from '../constants';
import { bindActionCreators } from 'redux';

const initialState = {
  products: [],
  selectedProd: {},
  userCheck: {},
  user: {},
  access: '',
  categorias: [],
  usuario: {},
  marcas: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return Object.assign({}, state, { products: action.products });
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { selectedProd: action.product });
    case CHECK_USER:
      return Object.assign({}, state, { userCheck: action.data });
    case ADD_USER:
      return Object.assign({}, state, { user: action.user });
    case ADM_ACCESS:
      return Object.assign({}, state, { access: action.qty });
    case SET_CATEGORIAS:
      return Object.assign({}, state, { categorias: action.categorias });
    case GET_USER:
      return Object.assign({}, state, { usuario: action.usuario });
    case SEARCH_MARK:
      return Object.assign({}, state, { marcas: action.marcas });
    default:
      return state;
  }
};
