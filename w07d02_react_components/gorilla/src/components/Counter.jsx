import { useState } from 'react';

const Counter = () => {
  // const state = useState(0);
  // const count = state[0];
  // const setCount = state[1];
  const [ count, setCount ] = useState(0)
  
  const increment = () => {
    setCount(count + 1);
  }

  // const count = 0;
  return (
    <div>
      <p>the counter is currently at {count}</p>
      <button onClick={increment}>increment the counter</button>
    </div>
  )
};



export default Counter;