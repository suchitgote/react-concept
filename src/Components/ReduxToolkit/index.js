// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

const ReduxToolkit = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit Example</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default ReduxToolkit;
