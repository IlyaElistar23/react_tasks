import React, {useState} from "react";

const HideText = () => {
    const [text, setHideText] = useState(false)
    const hideText = () => {
        setHideText()
    }
    return <div>
                <button onClick={hideText}>Hide text</button>
                {text && <p>Hello World!</p>}
            </div>
}

export default HideText;