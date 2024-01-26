import { useState } from "react";
import { Link } from "react-router-dom";

const FormPage = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const writeLogin = (event) => {
        setLogin(event.target.value)
    }

    const writePassword = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div className="form">
            <input type="text" value={login} onChange={writeLogin} />
            <input type="text" value={password} onChange={writePassword} />
            <Link>Отправить</Link>
        </div>

    )
}

export default FormPage;