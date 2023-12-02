import React, {useState} from "react";

const State = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return <div>
        <p>{count}</p>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
    </div>
}

export default State;