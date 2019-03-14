// import { RECEIVE_MOVIE, RECEIVE_MOVIES, RECEIVE_SEARCH,RECEIVE_FAVMOVIES } from '../constants';

// const initialState = {
//   listProducts: [],
//   selected: {},
//   title: '',
//   favmovies: []
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case RECEIVE_MOVIE:
//       return Object.assign({}, state, { selected: action.movie });
//     case RECEIVE_PRODUCTS:
//       return Object.assign({}, state, { listProducts: action.products });
//     case RECEIVE_SEARCH:
//       return Object.assign({}, state, { title: action.title });
//     case RECEIVE_FAVMOVIES:
//       return Object.assign({}, state, { favmovies: action.favmovies });
//     default:
//       return state;
//   }
// }