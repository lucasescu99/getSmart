import { RECEIVE_MOVIE, RECEIVE_MOVIES, RECEIVE_SEARCH,RECEIVE_FAVMOVIES } from '../constants';

const initialState = {
  list: [],
  selected: {},
  title: '',
  favmovies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIE:
      return Object.assign({}, state, { selected: action.movie });
    case RECEIVE_MOVIES:
      return Object.assign({}, state, { list: action.movies });
    case RECEIVE_SEARCH:
      return Object.assign({}, state, { title: action.title });
    case RECEIVE_FAVMOVIES:
      return Object.assign({}, state, { favmovies: action.favmovies });
    default:
      return state;
  }
}