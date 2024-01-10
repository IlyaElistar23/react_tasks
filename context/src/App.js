import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Title from './Title';
import Flex from './Flex';
import Console from './Console';
import Button from './Button';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>Coding_console</Title>
      </Flex>
      <Flex direction="column" margin={'10px 0px'}>
        <Console/>
        <Button outlined align="flex-end">Отправить</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
