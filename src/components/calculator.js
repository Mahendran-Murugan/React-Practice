import React, { useState } from 'react'

export const Calculator = () => {
    const [text, setText] = useState('')
    function calculate(){
        setText(eval(text))
    }
    return (
    <div>
        <input type= 'text' value={text}/><br/>
        <button onClick={()=>{setText(prev=>prev+'1')}}>1</button>
        <button onClick={()=>{setText(prev=>prev+'2')}}>2</button>
        <button onClick={()=>{setText(prev=>prev+'3')}}>3</button>
        <button onClick={()=>{setText(prev=>prev+'+')}}>+</button>
        <button onClick={()=>{setText(prev=>prev+'-')}}>-</button>
        <button onClick={calculate}>=</button>
    </div>
    )
}
