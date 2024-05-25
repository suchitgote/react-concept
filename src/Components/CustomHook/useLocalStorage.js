import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Get the initial value from local storage or use the provided initial value
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to hold the current value
  const [value, setValue] = useState(initial);

  // Function to update the value and store it in local storage
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Return the current value and the function to update it
  return [value, updateValue];
}

export default useLocalStorage;
