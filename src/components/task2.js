import React, { useState } from 'react'

export const Task2 = () => {
    const [inr, setInr] = useState(0)
    const [usd, setUsd] = useState(0)

    function doExchangeInr(e){
        setInr(e.target.value)
        setUsd(e.target.value/82.90)
    }
    function doExchangeUsd(e){
      setUsd(e.target.value)
      setInr(e.target.value*82.90)
    }
  return (
    <div>
        <label htmlFor="">USD:</label>
        <input name = "usd" value={usd} onChange={doExchangeUsd}/><br/>
        <label htmlFor="">INR:</label>
        <input name = "inr" value={inr} onChange={doExchangeInr}/>
    </div>
  )
}
