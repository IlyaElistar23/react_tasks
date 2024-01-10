import { useState } from "react";
import Form from "./Form";

const ShowText = () => {
    const [showText, setShowText] = useState(false)

    const handleClick = () => {
        setShowText(!showText)
    }

    return (
        <div>
            <button onClick={handleClick}>Show/Hide</button>
            {showText && <p><Form/></p>}
        </div>
    )
}

export default ShowText;