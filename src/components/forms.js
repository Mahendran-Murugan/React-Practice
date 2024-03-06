import React, { useState } from 'react'

export const Forms = () => {
    const[name, setName] = useState(" ");
    const[address, setAddress] = useState(" ");
    const[job, setJob] = useState(" ");
    function handleSubmit(event){
        alert(name+" "+address+" "+job)
        event.preventDefault();
    }
    function handleChange(e){
        setName(e.target.value)    
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text' value = {name} onChange={handleChange}/><br/>
            <label>Address:</label>
            <textarea value = {address} onChange={(e)=>{setAddress(e.target.value)}}></textarea><br/>
            <label>job:</label>
            <select value = {job} onChange={(e)=>{setJob(e.target.value)}}>
            <option value = "Full time">Full time</option>
            <option value = "Part time">Part time</option>
            </select>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
