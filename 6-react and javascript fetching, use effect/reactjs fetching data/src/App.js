import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  // let [data, setData] = useState({})

  let [repos, setRepos] = useState([{}])

  useEffect( () => {

    async function getRepos(){
      const response = await fetch('https://api.github.com/users/Abdul-sid/repos')
      const data = await response.json()
      setRepos(data)
      console.log(data)

    }

    getRepos()

    // 'https://api.github.com/users/Abdul-sid/repos'

    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(response => response.json())
    // .then(json => {setData(json); console.log(json)})
  },[])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>
        {repos.map((item,ind) => {
          return(
            <li key = {ind}> {item.name} </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
