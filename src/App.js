import React from 'react';
import {useState} from 'react';
import './App.css';

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
// 1. complete two tasks written in the code 
// 2. adjust display using css

//Improvement: 
// 1. Handlers can be used directly in onClick
// 2. add C button to clear [complete]

const App = () => {
  const MyButton = (props) => {
    return (
      <button onClick={() => onClickHandler(props.number)}>{props.number}</button>
    )
  }

  const [stateValue, setStateValue] = useState("");

  const [answer, setAnswer] = useState("");

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
    // Work To Do: Ans button handler
    // Create variable to store current answer
    // Next answer then overwirtes  
  }

  const clearHandler = () => {
    setStateValue("");
    setAnswer("");
  }

  const numbers = ["1", "2", "3", "(", ")","4", "5", "6", "+", "-", "7", "8", "9", "*", "/", ".", "0"]

  return (
    <div className="out">

      <div className="InOutput">
        <div className="UserInput">{stateValue}</div>
        <div className="CalculatorOutput">{answer}</div>
      </div>

      <div>
        <div>
            {numbers.map((num) => {
              return (
                <MyButton number={num} key={num} />
              )
            })}

            <button onClick={deleteHandler}>Del</button>
            <button onClick={answerHandler}>Ans</button>
            <button onClick={equalHandler}>=</button>
            <button onClick={clearHandler}>C</button>
        </div>
      </div>

    </div>
  );
}

export default App;