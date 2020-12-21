import { useState, useEffect } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import ButtonList from './components/ButtonList';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.div`
  border: solid 1px grey;
  height: 10rem;
  
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

  return (
    <div className='App'>
      <ReactFCCtest />
      <ButtonContainer>
        <ButtonList clickableElem={clickableElem} />
      </ButtonContainer>
    </div>
  );
}

export default App;
