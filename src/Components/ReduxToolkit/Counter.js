// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add , sub } from './Reducers/CounterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(add())}>Increment</button>
      <button onClick={() => dispatch(sub())}>Decrement</button>
    </div>
  );
};

export default Counter;
