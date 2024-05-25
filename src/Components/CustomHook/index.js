import React from 'react';
import useLocalStorage from './useLocalStorage';

function CustomHook() {
  // Using the custom hook to get and update a value in local storage
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// export default MyComponent;

export default CustomHook;