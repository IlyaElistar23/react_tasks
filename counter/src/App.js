import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ParentComponent></ParentComponent>
      </header>
    </div>
  );
}

export default App;
