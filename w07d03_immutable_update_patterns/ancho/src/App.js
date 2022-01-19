import './App.css';
import Header from './components/Header';
import BurritoCounter from './components/BurritoCounter';
import Burrito from './components/Burrito';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header 
        title={"Ancho Burrito Bar"} 
        slogan={"psst...guac is free"}
      />
      <BurritoCounter />
      <Burrito />
      <Card title="Invisible Man">
        <section>
          <p>Hello there</p>
        </section>
        <div>
          <ul>
            <li>lettuce</li>
            <li>tomato</li>
          </ul>
        </div>
      </Card>

      
     

      {/* Header({title: "James's Jam Shoppe", slogan={"jame is fun"}}) */}
 
    </div>
  );
}

export default App;

// const add = () => {
//   return 1 + 1;
// };

// add(4)

// const addTwo = (n) => {
//   return n + 2;
// }

// addTwo(3)
// addTwo(5)
