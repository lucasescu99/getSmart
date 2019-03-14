// import axios from 'axios';
// import { RECEIVE_PRODUCTS, RECEIVE_MOVIE, RECEIVE_SEARCH,RECEIVE_FAVMOVIES } from '../constants';
// import store from '../store';


// export const receiveProducts = (products) => ({
//   type: RECEIVE_PRODUCTS,
//   products,
// });

// export const receiveFavMovies = () => ({
//   type: RECEIVE_FAVMOVIES,
//   favmovies,
// });

// const receiveMovie = (movie) => ({
//   type: RECEIVE_MOVIE,
//   movie,
// });

// export const receiveSearchTitle = (title) => ({
//   type: RECEIVE_SEARCH,
//   title,
// });

// export const searchProducts = input => dispatch =>
//   axios.get('/listAll')
//     Products.findAll (where : {marca : input})
//     .then(findedProducts => dispatch(receiveProducts(findedProducts)


// export const oneMovie = idInput => dispatch =>
//   axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${idInput}`)
//     .then(res => res.data)
//     .then(movie => dispatch(receiveMovie(movie)))

// export const favMovies = () => dispatch =>
//   {return({ 
//     favmovies
//   })}
