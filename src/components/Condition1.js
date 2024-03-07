
import React,{useState} from 'react'

export const Conditional1 = () => {
    const [isLoggedIn, setLogin] = useState(false)
    if(isLoggedIn)
        return(
            <h1>You're already Logged in</h1>
        )    
    else
        return(
            <h1>You need to Login First</h1>
    )
}   
