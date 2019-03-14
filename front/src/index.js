import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from '../src/containers/Main';
import store from './redux/store';
import FormularioRegistro from './containers/FormularioRegistro'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
