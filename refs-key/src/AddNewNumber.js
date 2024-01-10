import React from 'react'
import { useEffect, useRef, useMemo, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    )
}

export default Count;