import React, { useEffect, useState } from 'react'

export const StopWatch = () => {
    const[count, setCount] = useState(0)
    const[isStart, setStart] = useState(true)
    useEffect(()=>{
        let interval
        if(isStart){
            interval = setInterval(() => {
                setCount(prev=>prev+1)
            }, 1000);
        }else{
            clearInterval(interval)
        }
        return()=>{
            clearInterval(interval)
        }
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setStart(true)}}>Start</button>
        <button onClick={()=>{setStart(false)}}>Stop</button>
        <button onClick={()=>{
            setStart(false)
            setCount(0)
        }}>Reset</button>
    </div>
  )
}
