import axios from 'axios';
import { RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_SEARCH,RECEIVE_FAVMOVIES } from '../constants';
import store from '../store';


export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

export const receiveFavMovies = () => ({
  type: RECEIVE_FAVMOVIES,
  favmovies,
});

const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

export const receiveSearchTitle = (title) => ({
  type: RECEIVE_SEARCH,
  title,
});

export const buscarMovies = input => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${input}`)
    .then(res => res.data.Search)
    .then(movies => dispatch(receiveMovies(movies)))


export const oneMovie = idInput => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${idInput}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)))

export const favMovies = () => dispatch =>
  {return({ 
    favmovies
  })}
