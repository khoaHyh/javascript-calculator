import { useState } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import ButtonList from './components/ButtonList';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  border: solid 1px grey;
  height: 17rem;
  width: 100%;
  position: relative;
`

const Display = styled.div`
  border: solid 1px #e75480;
  padding: 0.5rem;
  font-size: 1.4rem;
  height: 3rem;
  width: 94%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

// Table with clickable elements as objects
const clickableElem = [
  { id: 'clear', value: 'AC' },
  { id: 'divide', value: '/' },
  { id: 'multiply', value: 'x' },
  { id: 'seven', value: '7' },
  { id: 'eight', value: '8' },
  { id: 'nine', value: '9' },
  { id: 'subtract', value: '-' },
  { id: 'four', value: '4' },
  { id: 'five', value: '5' },
  { id: 'six', value: '6' },
  { id: 'add', value: '+' },
  { id: 'one', value: '1' },
  { id: 'two', value: '2' },
  { id: 'three', value: '3' },
  { id: 'zero', value: '0' },
  { id: 'decimal', value: '.' },
  { id: 'equals', value: '=' }
]

const App = () => {
  const [display, setDisplay] = useState();

  const handleDisplay = (event) => {
    setDisplay(event);
  }

  return (
    <div className='App'>
      <ReactFCCtest />
      <Display id="display">{display}</Display>
      <ButtonContainer>
        <ButtonList updateDisplay={handleDisplay} clickableElem={clickableElem} />
      </ButtonContainer>
    </div>
  );
}

export default App;
