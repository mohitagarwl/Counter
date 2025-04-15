import logo from './logo.svg';
import './App.css';
import CounterClass from './CounterClass.js';
import CounterFunctional from './CounterFunctional.js';

function App() {
  return (
    <div>
      <CounterClass/>
      <br></br>
      <hr></hr>
      <CounterFunctional/>
    </div>
  );
}

export default App;
