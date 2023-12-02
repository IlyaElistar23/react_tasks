import React, { useState } from "react";

const Form = () => {
    const [order, setOrder] = useState('')
    const changeOrder = (event) => {
        setOrder(event.target.value)
    }
    return <div>
        <label>
            Введите ваш заказ:
            <input type='text' value={order} onChange={changeOrder}></input>
        </label>
        <p>Ваш заказ: {order}</p>
    </div>
}

export default Form;