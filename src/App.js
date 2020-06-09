import React from 'react';
import {useState} from 'react';
import './App.css';
import MyButton from './MyButton';

const App = () => {
  
  const [stateValue, setStateValue] = useState("");

  const [answer, setAnswer] = useState("");

  const [displayAns, setDisplayAns] = useState(false);

  const onClickHandler = (number) => {
    if (number === "=") {
      equalHandler();
    } else if (number === "C") {
      clearHandler();
    } else if (number === "Ans") {
      answerHandler();
    } else if (number === "Del") {
      deleteHandler();
    } else {
      setStateValue(stateValue + number);
    }
  }

  const deleteHandler = () => {
    if (stateValue.slice(stateValue.length-3, stateValue.length) === "Ans") {
      setStateValue(stateValue.slice(0, -3));
    } else {
      setStateValue(stateValue.slice(0, -1));
    }
  }

  const equalHandler = () => { 
    try {
      const newAnswer = stateValue.replace("Ans", answer);
      setDisplayAns(true);
      setAnswer(eval(newAnswer)); 
    } catch {
      alert("Invalid equation!!!");
    }
  }

  const clearHandler = () => {
    setStateValue(""); 
    setDisplayAns(false);
  }

  const answerHandler = () => {
    setStateValue(stateValue + "Ans");
  }

  const numbers = ["1", "2", "3", "(", ")", "4", "5", "6", "+", "-","7", "8", "9", "*", "/", ".", "0", "Ans", "=", "C", "Del"]

  return (
    <div className="out">

      <div className="InOutput">
        <div className="UserInput">{stateValue}</div>
        <div className="CalculatorOutput">{displayAns ? answer : ""}</div>
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
        </div>
      </div>
      
    </div>
  );
}

export default App;


// Question: How to apply className="item" to button C?