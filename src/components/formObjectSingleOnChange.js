import React from 'react'
import { useState } from 'react'

export const FormObjectSingleOnChange = () => {
    const[formData, setFormData] = useState({
        fname:"",
        lname:""
    })

    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

  return (
    <div>
        <form>
        <label>First Name:</label>
        <input type='text' value = {formData.fname} name = "fname" onChange={handleChange}/><br/>
        <label>Last Name:</label>
        <input type='text' value = {formData.lname} name = "lname" onChange={handleChange}/><br/>
        <h1>{formData.fname} {formData.lname}</h1>
        </form>
    </div>
  )
}
