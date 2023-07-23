import React from 'react';
import useStore from '../store';

const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
