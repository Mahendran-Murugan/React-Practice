
import React,{useState} from 'react'

export const Conditional3 = () => {
    const [isLoggedIn, setLogin] = useState(false)
    return isLoggedIn ? (<h1>You are Already LoggedIn</h1>): (<h1>You Need LoggedIn First</h1>)
}   
