import logo from './logo.svg';
import './App.css';
import Name from './Comp1';
import Age from './Comp2';
import IsMan from './Comp3'
import CityInfo from './Comp4'
import Skills from './Comp5'
import ShowStudyMonth from './Comp6'
import State from './State'
import HideText from './HideText';
import Form from './Form';
import ChangeColor from './ChangeColor'
import Example from './Timer';

function App() {
  const skills = ['JavaScript', ' HTML', ' CSS', ' FlexBox', ' React'];
  const month = 10;
  const showInfo = () => <div>Учусь в Redev {month} месяцев.</div>
  return (
    <div className="App">
      <header className="App-header">
       <Name name = {'Ilya'}></Name>
       <Age age = {27}></Age>
       <IsMan isMan = {true}></IsMan>
       <Skills skills = {skills}></Skills>
       <CityInfo data = {{city: 'Minsk', country: 'Belarus', postcode: 220026}}></CityInfo>
       <ShowStudyMonth showInfo = {showInfo}></ShowStudyMonth>
       <State/>
       <HideText/>
       <Form/>
       <ChangeColor/>
       
      </header>
    </div>
  );
}

export default App;
