import React, {useState} from 'react';
import './App.css';
import Parent from './parent.js'
import CounterContext from "./CounterContext"

function App() {

  // 54 mins

  let countState = useState(1)
  // let [count, setCount] = useState(25)

  return (
    <CounterContext.Provider value={countState}>
    <div>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
