import React, {useState} from "react";
import ChildComponent from './ChildComp';
import SiblingComponent from "./SiblingComp";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const random = () => setCount(Math.round(1 + Math.random() * (10 + 1 - 1)));
    return <div>
        <ChildComponent name = 'Илья' count={count}></ChildComponent>
        <button onClick={increment}>Увеличить</button>
        <button onClick={decrement}>Уменьшить</button>
        <button onClick={reset}>Сбросить</button>
        <button onClick={random}>Случайное число</button>
        <SiblingComponent></SiblingComponent>
    </div>
}

export default ParentComponent;