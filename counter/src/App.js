import logo from './logo.svg';
import './App.css';
import LifecycleComponent from './LifecycleClass'
import LifecycleComp from './LifeCycleFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LifecycleComponent/>
        <LifecycleComp/>
      </header>
    </div>
  );
}

export default App;
