import { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';

const Title = () => {
  const [ title, setTitle ] = useState('snorkle dork');

  useTitle(title);
  // useEffect(() => {
  //   document.title = "an awesome new title"
  // })


  return (
    <section>
      <h2>Title Component</h2>
      <div>
        <p>new title</p>
        <input 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
    </section>
  )
};

export default Title;