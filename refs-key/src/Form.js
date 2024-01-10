import { useState, useRef } from "react";

const Form = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)

    const focus = () => {
        textInput.current.focus()
    }
    const writeText = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <input type="text" ref={textInput} value={text} onChange={writeText}/>
            <button onClick={focus}>focus</button>
            <p>{text}</p>
        </div>
    )
}

export default Form;