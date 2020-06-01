import React from 'react';
import {useState} from 'react';
import './App.css';

const App = () => {
  const array1 = useState(0)
  const count = array1[0]
  const setCount = array1[1]

  const array2 = useState("green")
  const color = array2[0]
  const setColor = array2[1]
  
  const plusHandler = () => {
    const newCount = count + 1
    setCount(newCount)
  }

  const colorHandler = () => {
    if (color === 'green') {
      setColor("red")
    } else {
      setColor("green")
    }
  }

  const style = { color: color}

  return (
    <div className="App" style={style}>
      <h1>{"clicked " + count + " times"}</h1>
      <div onClick={plusHandler}>+++</div>
      <div onClick={colorHandler}>color </div>
    </div>
  );
}

export default App;
