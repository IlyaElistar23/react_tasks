import React, { useState } from "react";

const ChangeColor = () => {
    const [color, setColor] = useState('white')
    const handleClick = () => {
        setColor(color === 'white' ? 'yellow' : 'white')
    }
    const style = {
        color: color,
    }
    return <div>
        <button onClick={handleClick}>Изменить</button>
        <p style={style}>Этот текст меняет свой цвет</p>
    </div>
}

export default ChangeColor;