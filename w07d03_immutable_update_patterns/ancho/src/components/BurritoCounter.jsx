import { useState } from 'react';

const BurritoCounter = () => {
 
  const [burritoCount, setBurritoCount] = useState(0);

  const handleClick = () => {
    // setBurritoCount(burritoCount + 1) // 0 + 1
    // setBurritoCount(burritoCount + 1) // 0 + 1
    // setBurritoCount(burritoCount + 1) // 0 + 1
    setBurritoCount((prev) => {
      console.log(prev)
      return prev + 1;
    })
    setBurritoCount((prev) => {
      console.log(prev)
      return prev + 1;
    })
    setBurritoCount((prev) => {
      console.log(prev)
      return prev + 1;
    })

  };

  return (
    <div>
      <p>you currently are ordering {burritoCount} burritos</p>
      <button onClick={handleClick}>increment burritos</button>
    </div>
  )
};


export default BurritoCounter;