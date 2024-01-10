import './App.css';
import ThemeContext from './ThemeContext';
import { lightTheme, darkTheme } from './Theme';
import { useState } from 'react';
import Content from './Content';
import { styled } from 'styled-components';
import Switch from './Switch';

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
`

function App() {
  const [theme, setTheme] = useState('light')

  const switchTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')
  return (
    <ThemeContext.Provider theme={theme === 'light' ? lightTheme : darkTheme}>
      <StyledApp>
      <Content />
      <Switch switchTheme={switchTheme}/>
    </StyledApp>
    </ThemeContext.Provider>
  )
}

export default App;
