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






const App = () => {
  const MyButton = (props) => {
    return (
      <button onClick={() => onClickHandler(props.number)}>{props.number}</button>
    )
  }

  const [stateValue, setStateValue] = useState("");

  const onClickHandler = (number) => {
    const newStatevalue = stateValue + number;
    setStateValue(newStatevalue);
  }

  return (
    <div class="out">
      <div class="div1">
        <div class="UserInput">{stateValue}</div>
        <div class="CalculatorOutput"></div>
      </div>
      <div class="div2">
        <div class="div3">
          <div class="buttons">
            <MyButton number={"1"} />
            <MyButton number={"2"} />
            <MyButton number={"3"} />
            <MyButton number={"("} />
            <MyButton number={")"} />
          </div>

          <div class="buttons">
            <MyButton number={"4"} />
            <MyButton number={"5"} />
            <MyButton number={"6"} />
            <MyButton number={"+"} />
            <MyButton number={"-"} />
          </div>

          <div class="buttons">
            <MyButton number={"7"} />
            <MyButton number={"8"} />
            <MyButton number={"9"} />
            <MyButton number={"*"} />
            <MyButton number={"/"} />
          </div>

          <div class="buttons">
            <MyButton number={"."} />
            <MyButton number={"0"} />
            <button >del</button>
            <button >Ans</button>
            <MyButton number={"="} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;