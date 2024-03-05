import { useState } from "react";

export const Counter = (props) => {
    const [value, setValue] = useState(0)
    function increaseCount(){
        setValue(prev=>prev+1)
    }
    return(
        <>
        <h1>The Count is {value} </h1>
        <button onClick={increaseCount}>Increment</button>
        </>
    )
}