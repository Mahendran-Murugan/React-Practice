
import React,{useState} from 'react'

export const Conditional4 = () => {
    const [isLoggedIn, setLogin] = useState(true)
    return (<div>{isLoggedIn&&<h1>You are Already Logged In</h1>}</div>)
}   
