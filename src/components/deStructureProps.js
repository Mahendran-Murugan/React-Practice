import React from "react"

export const Props = (props) =>{
    const {name, age} = props
    return (
        <>
            <h1>Your name is {name}</h1>
            <h1>Your age is {age}</h1>
        </>
    )
} 