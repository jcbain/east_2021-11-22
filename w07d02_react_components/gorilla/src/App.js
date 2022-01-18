import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

function App(props) {
  return (
    <div className="App">
      <h1>Gorilla App</h1>
      <Counter />
      <Header message="Lisa's Loveable Llama Lounge" />
      <Header message="Gorilla Sara's Glamorous Gargoyle Gymnasium" />
      <Header message="Karl's Killer Kebab Kitchen" />
      {/* Header({message: "Lisa's Loveable Llama Lounge"}) */}
      {/* <h2>Is a cool app</h2> */}
      {/* <header>Gorilla Sara's Glamorous Gargoyle Gymnasium</header> */}
    </div>
  );
}

export default App;
