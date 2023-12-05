import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComp';
import LifecycleComponent from './LifecycleClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LifecycleComponent/>
      </header>
    </div>
  );
}

export default App;
