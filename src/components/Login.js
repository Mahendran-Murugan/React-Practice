import React, { useState,useEffect } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
  
  const [userlist, setUserList] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3004/users')
    .then(res=>setUserList(res.data))
    .catch(err=>console.log(err))
},[])


    const navigate = useNavigate()
    const [email, setUser] = useState('')
    const [pass, setPass] = useState('')
    const context = useAuth()

    
    const handleLogin = (e) =>{
      const isUserValid = userlist.some(u =>
        u.email === email && u.pass === pass
      )
      if(isUserValid){
        context.login(email)
        navigate('/')
      }else{
        alert("User name or Password Not Match")
      }
      e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
        <label htmlFor="login">Email:</label>
        <input type="text" name="user" id="login" value={email} onChange={(e)=>{setUser(e.target.value)}}/><br/>
        <label htmlFor="pass">Password:</label>
        <input type="password" name="pass" id="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}}/><br/>
        <button type='submit'>Login</button>
        </form>
        {context.user&&<button onClick={()=>context.logout()}>Logout</button>}
    </div>
    )
}
