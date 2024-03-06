import React from 'react'
import { useState } from 'react'

export const FormObjectWithPrevData = () => {
    const[formData, setFormData] = useState({
        fname:"",
        lname:""
    })

    function handleChangeFname(event){
        setFormData({...formData,fname:event.target.value})
    }

    function handleChangeLname(event){
        setFormData({...formData,lname:event.target.value})
    }

  return (
    <div>
        <form>
        <label>First Name:</label>
        <input type='text' value = {formData.fname} onChange={handleChangeFname}/><br/>
        <label>Last Name:</label>
        <input type='text' value = {formData.lname} onChange={handleChangeLname}/><br/>
        <h1>{formData.fname} {formData.lname}</h1>
        </form>
    </div>
  )
}
