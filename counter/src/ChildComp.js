import React from "react";

const ChildComponent = ({name, count}) => {
    return <div>Привет, {name}! Текущий счётчик: {count}</div>
}

export default ChildComponent;