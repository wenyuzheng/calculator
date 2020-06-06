import React, { useState, useEffect } from 'react';

const MyButton = ({ number, onClickHandler }) => {

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            setTimeout(() => {setClicked(false)}, 500)
        }
    }, [clicked]);

    const buttonHandler = () => {
        onClickHandler(number);
        setClicked(true);
    }

    const backgroundColor = clicked ? "darkgrey" : "white";
    const style = { backgroundColor };

    return (
        <button onClick={buttonHandler} style={style}>{number}</button>
    )
}

// const MyButton = ({ number, onClickHandler }) => <button onClick={() => onClickHandler(number)}>{number}</button>

// export default ({ number, onClickHandler }) => <button onClick={() => onClickHandler(number)}>{number}</button>


// function MyButton({ number, onClickHandler }) {
//     return (
//          <button onClick={() => onClickHandler(number)}>{number}</button>
//     )
// }

export default MyButton;