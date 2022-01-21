import { useEffect, useState } from 'react';
import useMouseMove from '../hooks/useMouseMove';

const Mouse = () => {
 
  const position = useMouseMove();

  const pointerStyle = {
    position: 'absolute',
    height: '50px',
    width: '50px',
    backgroundColor: 'purple',
    left: position.x - 25,
    top: position.y -  25
  }

  return (
    <section>
      <h2>Mouse Component</h2>
      <p>your mouse's current position is {position.x}, {position.y}</p>
      <div style={pointerStyle}/>
    </section>
  );
};

export default Mouse;