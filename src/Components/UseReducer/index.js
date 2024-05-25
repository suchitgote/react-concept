import React, { useReducer } from 'react';
import counterReducer from './Reducer';
import Child1 from './Child1';


// Component using useReducer
const UseReducerHook = () => {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <Child1/>
    </div>
  );
};

export default UseReducerHook;
