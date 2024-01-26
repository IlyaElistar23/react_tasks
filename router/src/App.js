import './App.css';
import { Routes, Route } from 'react-router-dom'
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import FormPage from './FormPage';
import HomePage from './HomePage';
import Layout from './Layout';
import SinglePage from './SinglePage';
import EditPost from './EditPost';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path='form' element={<FormPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='about/:id' element={<SinglePage/>}/>
          <Route path='about/:id/edit' element={<EditPost/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;