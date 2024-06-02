import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [state,setState]=useState(0);

  function counter(){
    setState(state+1);
  }
  function counter2(){
    setState(state-1);
  }
  function reset(){
    setState(0);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{state}</h1>
      <button onClick={counter}>+</button>
      <button onClick={counter2}>-</button>
      <button onClick={reset}>Reset</button>

    </div>
  );
}

export default App;
