// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Child from './Child';
const Redux = ()=>{
  return(
  <Provider store={store}>
    <App />
    <Child />
  </Provider>
  )
}

export default Redux