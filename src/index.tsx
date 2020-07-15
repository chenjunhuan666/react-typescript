import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './modules/router/AppRouter';
import { Provider } from 'react-redux'
import store from './store/index'
import './index.css'
ReactDOM.render(
  <Provider store ={store}> 
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);


