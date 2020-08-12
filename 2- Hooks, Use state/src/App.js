import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Message} from './Message.js'

function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true)


  return (
    <div className={`box ${isMorning ? 'daylight' : 'box'}`}>
      <h1>Have a Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message value = {count} />
      <br />
        <button onClick = {() => {alert("value changed"); setCount(count + 1)} } >
          Update Counter
        </button>

        <button onClick = {() => {setMorning(!isMorning )}}> Change light time </button>
    </div>
  );
}


// OLD PROCEDURE

// class AppClass extends React.Component{
//   this.state={}

//   constructor

//   componentDidMount

//   render()
// }

//  Virtual DOM is creating a copy of the whole DOM object, 
//  and Shadow DOM creates small pieces of the DOM object which has their own, 
//  isolated scope for the element they represent.

// React Hooks
//  Hooks are a new addition in React 16.8. They let you use state and other 
//  React features without writing a class. Hooks are backwards-compatible.


export default App;
