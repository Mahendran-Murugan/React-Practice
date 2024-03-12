import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const navigate = useNavigate()
    const [usrname, setUser] = useState('')
    const context = useAuth()
    const handleLogin = () =>{
      context.login(usrname)
      navigate(-1)
    }
  return (
    <div>
        <label htmlFor="login">User:</label>
        <input type="text" name="user" id="login" value={usrname} onChange={(e)=>{setUser(e.target.value)}}/><br/>
        <button onClick={handleLogin}>Login</button>
        {context.user&&<button onClick={()=>context.logout()}>Logout</button>}
    </div>
    )
}
