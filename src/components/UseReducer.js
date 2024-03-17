import React, { useReducer } from 'react'

const initialState = { count: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return { count: 0 }
        default:
            return { count: 0 }
    }
}

export const UseReducer = () => {
    const [state, dispatcher] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count:{state.count}</h1>
            <button onClick={() => dispatcher({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatcher({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatcher({ type: "reset" })}>Reset</button>
        </div>
    )
}
