
import React,{useState} from 'react'

export const Conditional2 = () => {
    const [isLoggedIn, setLogin] = useState(true)
    let html
    if(isLoggedIn)
        html = <h1>You are Already Loggedin</h1>
    else
        html = <h1>You Need to Loggedin</h1>
    return html
}   
