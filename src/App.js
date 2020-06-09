import React from 'react';
import {useState} from 'react';
import './App.css';
import MyButton from './MyButton';
import {HotKeys} from 'react-hotkeys';

// const MyButton = ({number, handler}) => {
//   return (
//     <button onClick={() => handler(number)}>{number}</button>
//   )
// }

// const App = () => {
//   const [count, setCount] = useState("");

//   const plusHandler = (number) => {
//     const newCount = count + number;
//     setCount(newCount);
//   }

// const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

//   return (
//     <div className="App">
//       <h1>{count}</h1>

//       {numbers.map((num)=> {
//         return (
//           <MyButton number={num} handler={plusHandler} key={num}/>
//         )
//       })}
//     </div>
//   );
// }

// export default App;




// Work To Do: 
// 1. Get all buttons to turn grey on click
// 2. Make Ans button work
// 3. Use display grid for css

//Improvement: 
// 1. Handlers can be used directly in onClick
// 2. Make hotkeys (ie press on keybroad)

const App = () => {
  
  const [stateValue, setStateValue] = useState("");

  const [answer, setAnswer] = useState("");

  const [storedAnswer, setStoredAnswer] = useState("");

  const onClickHandler = (number) => {
    setStateValue(stateValue + number);
  }

  const deleteHandler = () => {
    setStateValue(stateValue.slice(0, -1));
  }

  const equalHandler = () => { // Warining: eval() is harmful!
    try {
      setAnswer(eval(stateValue)); 
    } catch {
      alert("Invalid equation!!!");
    }
  }

  const answerHandler = () => {
    setStoredAnswer(answer);
    console.log(storedAnswer);
  }

  const clearHandler = () => {
    setStateValue("");
    setAnswer("");
  }

  const numbers = ["1", "2", "3", "(", ")", "4", "5", "6", "+", "-","7", "8", "9", "*", "/", ".", "0", "Ans", "=", "C", "Del" ]

  return (
    <div className="out">

      <div className="InOutput">
        <div className="UserInput">{stateValue}</div>
        <div className="CalculatorOutput">{answer}</div>
      </div>

      <div>
        <div className="container">
            {numbers.map((number) => {
              const myButtonProps = {
                number,
                "key": number,
                onClickHandler, // = (onClickHandler: onClickHandler)
              }
              return (
                <MyButton {...myButtonProps}/>
              )
            })}

            {/* <button onClick={deleteHandler}>Del</button>
            <button onClick={answerHandler}>Ans</button>
            <button onClick={equalHandler}>=</button> */}
            <button className = "item" onClick={clearHandler}>C</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;