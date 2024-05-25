// store.js
import { configureStore, } from '@reduxjs/toolkit';
import { counterReducer2 } from './Reducers/CounterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer2,
  },
});

export default store;
