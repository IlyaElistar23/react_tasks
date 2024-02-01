import './App.css';
import { Routes, Route } from 'react-router-dom'
import LayoutComponent from './components/Layout';
import BasicReact from './components/BasicReact';
import HomePage from './components/HomePage';
import StructureApp from './components/StructureApp';
import VDOMReact from './components/VDOMReact';
import ComponentsProps from './components/Components & Props';
import State from './components/State';
import LifeCycleFunction from './components/LifeCycleFunction';
import LifeCycleClass from './components/LifeCycleClass';
import EventsComp from './components/EventsComp';
import RefsMemo from './components/RefsMemo';
import FragmentKey from './components/FragmentKey';
import ContextComp from './components/ContextComp';
import Routing from './components/Routing';
import FormComp from './components/Form';
import Styling from './components/Style';
import Storage from './components/Storage';
import HighOrderComponents from './components/HOC';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent />}>
        <Route index element={<HomePage />} />
        <Route path='basic' element={<BasicReact />} />
        <Route path='structure' element={<StructureApp />} />
        <Route path='vdom' element={<VDOMReact />} />
        <Route path='comp-props' element={<ComponentsProps />} />
        <Route path='state' element={<State />} />
        <Route path='lifecycle-class' element={<LifeCycleClass/>}/>
        <Route path='lifecycle-function' element={<LifeCycleFunction/>}/>
        <Route path='events' element={<EventsComp/>}/>
        <Route path='refs-memo' element={<RefsMemo/>}/>
        <Route path='fragment-key' element={<FragmentKey/>}/>
        <Route path='context' element={<ContextComp/>}/>
        <Route path='routing' element={<Routing/>}/>
        <Route path='forms' element={<FormComp/>}/>
        <Route path='styling' element={<Styling/>}/>
        <Route path='storage' element={<Storage/>}/>
        <Route path='high-order-components' element={<HighOrderComponents/>}/>
      </Route>
    </Routes>
  )
}

export default App;
