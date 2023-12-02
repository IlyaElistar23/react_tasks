import React, {useState} from "react";

const SiblingComponent = () => {
    const [text, setText] = useState('Text')
    const changeText = () => {
        setText('Redev')
    }
    const resetText = () => {
        setText('Text')
    }
    return <div>
        <p>{text}</p>
        <button onClick={changeText}>Изменить текст</button>
        <button onClick={resetText}>Сбросить текст</button>
    </div>
}

export default SiblingComponent;