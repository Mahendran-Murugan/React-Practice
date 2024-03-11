import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CRUD = () => {

    useEffect(()=>{
        axios.get('http://localhost:3001/students')
        .then((res)=>{
            setPost(res.data)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
    })

    const handleSubmit = (e) =>{
        axios.post('http://localhost:3001/students',{
            "id":id,
            "name":name,
            "age":age
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
    }


    const updateData = (id) =>{
        axios.delete(`http://localhost:3001/students/${id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
    }

    const deleteData = (id) =>{
        axios.delete(`http://localhost:3001/students/${id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
    }
    const [post, setPost] = useState([{}])
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input type='number' value = {id} onChange={(e)=>{setId(e.target.value)}}/><br/>
            <label>Name:</label>
            <input type='text' value = {name} onChange={(e)=>{setName(e.target.value)}}/><br/>
            <label>Age:</label>
            <input type='number' value = {age} onChange={(e)=>{setAge(e.target.value)}}/><br/>
            <button type='submit'>Submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                {post.map(x=>(
                    <tr>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>
                        <button onClick={()=>updateData(x.id)}>Update</button>
                        <button onClick={()=>deleteData(x.id)}>Delete</button>
                    </td>
                    </tr>
                ))}
            
            </tbody>
        </table>
    </div>
  )
}
