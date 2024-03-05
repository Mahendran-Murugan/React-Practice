import React from "react"

export const Props = (props) => {
    return(
        <>
        <h1>Hello {props.name}</h1>
        {props.children}
        </>
    )
}