import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    
    const navigate = useNavigate();

    
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    
    const handleRegister = () =>{
        axios.post('http://localhost:3004/users',{
            "name":user,
            "email":email,
            "pass":pass
        })
        navigate('/login')
    }

  return (
    <div>
        <form onSubmit={handleRegister}>
            <label>Username:</label>
            <input type='text' value={user} onChange={(e)=>{setUser(e.target.value)}}/><br/>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Password:</label>
            <input type='password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/><br/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}
