import { useEffect, useState, useMemo } from "react";
import React from "react";
import axios from "axios";

const LifecycleComp = () => {
  const [count, setCount] = useState(0)
  
  const requestToServer = async () => {
    const data = await axios({
      method: 'post',
      url: 'https://todo-redev.herokuapp.com/api-docs/api/auth/login',
      data: {
        "email": "il7zah@mail.ru",
        "password": "DjElistar_6017610",
      }
    })
    console.log(data);
  }

  useEffect(() => {
    requestToServer()
    console.log('Component did mount');
    return () => console.log('Component will unmount');
  }, [])

  const handleClick = useMemo(() => {
    console.log('Component did update')
    console.log(count);
    return count % 2 === 0? count: count - 1
  }, [count])


  return <div>
    Значение счетчика в функциональном компоненте: {handleClick}
    <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
}

export default LifecycleComp;