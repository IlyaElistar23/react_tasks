import logo from './logo.svg';
import './App.css';
import LifecycleComponent from './LifeCycleClass';
import LifecycleComp from './LifeCycleFunction';
import { useState } from 'react';

function App() {

  const [visibleClass, setVisibleClass] = useState(true);

  const toggleVisivleClass = () => setVisibleClass(visible => !visibleClass);

  const [visibleFunction, setVisibleFunction] = useState(true)
  
  const toggleVisivleFunction = () => setVisibleFunction(visible => !visibleFunction)

  return (
    <div className="App">
      <header className="App-header">
        {visibleClass && <LifecycleComponent/>}
        {visibleFunction && <LifecycleComp/>}
        <button onClick={toggleVisivleClass}>Спрятать классовый компонент</button>
        <button onClick={toggleVisivleFunction}>Спрятать функциональный компонент</button>
      </header>
    </div>
  );
}

export default App;
