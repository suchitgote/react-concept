

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import Counter from './Counter';
import Child from './Child';
const ReduxThunk = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux thunk</h1>
        <Child />
      </div>
    </Provider>
  );
};

export default ReduxThunk;
