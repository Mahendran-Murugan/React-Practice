import { useState } from "react";

export const Counter = (props) => {
    const [value, setValue] = useState(0)
    function increaseCount(){
        if(value < 10)
        setValue(prev=>prev+1)
    }
    function decreaseCount(){
        if(value > 0)
        setValue(prev=>prev-1)
    }
    function resetCount(){
        setValue(0)
    }
    return(
        <>
        <h1>The Count is {value} </h1>
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
        </>
    )
}