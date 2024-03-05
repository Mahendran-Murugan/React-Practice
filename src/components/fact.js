import React from "react"

export const Fact = () => {
    var n = prompt()
    var num = n;
    var fact = 1;
    while(num > 0){
        fact *= num;
        num --;
    }
    return(
        <>
        <h1>Input -- {n}</h1>
        <h1>Output -- {fact}</h1>
        </>
    )
}