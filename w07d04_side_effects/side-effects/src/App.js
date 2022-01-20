import { useEffect, useState } from 'react';
import './App.css';
import Appointments from './components/Appointments';

function App() {

  const [ counter, setCounter ] = useState(0);
  const [ searchTerm, setSearchTerm ] = useState("");


  // useEffect(() => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // }, []);
 
  // useEffect(() => {
  //   document.title = `(${counter}) Awesome App`;
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(`the counter is currently at ${counter}`)
  //   }, 3000);

    
  //   return () => {
  //     clearInterval(interval)
  //     console.log('interverval has been cleared');
  //   }
  // }, [counter]);
  
  return (
    <div className="App">
      <h1>the awesome app</h1>
      <Appointments />
      {/* <p>counter is currently {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment counter</button>
      <div>
        <p>the current search term is {searchTerm}</p>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div> */}
    </div>
  );
}

export default App;
