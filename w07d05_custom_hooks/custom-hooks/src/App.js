import './App.css';
import { useState } from 'react';
// import Title from './components/Title';
// import Mouse from './components/Mouse';
// import Inputs from './components/Inputs';
// import Location from './components/Location';
// import useApi from './hooks/useApi';
// import Bored from './components/Bored';
import Sprite from './components/Sprite'

function App() {
  // const result = useApi('https://www.boredapi.com/api/activity');
  // const { error, loading, data } = useApi('https://www.boredapi.com/api/activity');
  // console.log(result)
  // const [ count, setCount ] = useState(0);

  // const handleClick = () => {
  //   // setCount(count + 1); // 0 + 1
  //   // setCount(count + 1); // 0 + 1
  //   // setCount(count + 1); // 0 + 1

  //   setCount((prev) => {
  //     return prev + 1;
  //   })
  //   setCount((prev) => {
  //     return prev + 1;
  //   })
  //   setCount((prev) => {
  //     return prev + 1;
  //   })
  // }

  return (
    <div className="App">
      <h1>Custom Hooks!!!</h1>
      {/* <p>the current count is {count}</p>
      <button onClick={handleClick}>increment counter</button> */}
      {/* {result.error && <p>an error occured</p>}
      {result.loading && <p>loading</p>}
      {(!result.loading && !result.error) && (
        <Bored 
          activity={result.data.activity} 
          participants={result.data.participants}
        />
      )} */}
      {/* <Title /> */}
      {/* <Mouse /> */}
      {/* <Inputs /> */}
      {/* <Location /> */}
      <div style={{display: 'flex'}}>
        <Sprite animal={'dog_1'} />
        <Sprite animal={'dog_2'} />
        <Sprite animal={'cat_1'} />
        <Sprite animal={'cat_2'} />
      </div>
 
    </div>
  );
}

export default App;
