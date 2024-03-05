import { useState } from "react";

export const State = (props) => {
    const [name, setName] = useState("Adam")
    function handleChange(){
        setName("Mahi")
    }
    return(
        <>
        <h1>Hello {name}</h1>
        <button onClick={handleChange}>Change</button>
        </>
    )
}