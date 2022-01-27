import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ClassComponent from './components/ClassComponent';
import Lifecycle from './components/Lifecycle';

function App() {
  return (
    <div className="App">
      <h1>Class-based!!!!</h1>
      <Router>
        <nav>
          <Link to="/class">class component</Link>
          <br />
          <Link to="/lifecycle">lifecycle component</Link>
        </nav>

        <Routes>
          <Route path="/class" element={<ClassComponent someProp="very cool"/>}/>
          <Route path="/lifecycle" element={<Lifecycle />}/>
        </Routes>
      </Router>
      {/* <ClassComponent someProp={'I am an awesome prop'}/> */}
      {/* <Lifecycle /> */}
    </div>
  );
}

export default App;
