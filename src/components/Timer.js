import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const[count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setCount(prev=>prev+1)
        }, 1000);
    })
  return (
    <h1>{count}</h1>
  )
}
