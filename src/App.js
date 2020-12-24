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

// Regex to search for math operators
const reMath = /[/|x|+|-]+/g


const App = () => {
  const [display, setDisplay] = useState(`0`);
  const [answer, setAnswer] = useState();

  // Method to handle the display that receives the type of button as
  // a prop
  const handleDisplay = (button) => {
    // If clear button is clicked, clear answer state and display
    if (button === 'AC') {
      setDisplay(`0`);
      setAnswer(``);
    // If equal button is clicked, display answer state as display
    } else if (button === '=') {
      // use .replace('x', '*') to correctly multiply
      setDisplay(`resolveAnswer`)
    // If a math operator is clicked
    } else if (reMath.test(button)) {
      setDisplay(button);
      setAnswer(display + button);
    // If user clicks the decimal button
    } else if (!display.includes('.') && button === '.') {
      setDisplay(display + button);
    // If the answer, zero, or a math operator is on the display and a non-zero digit is clicked,
    // set the display to the button clicked
    } else if (display === '0' || reMath.test(display) || display === 'resolveAnswer') {
      setDisplay(button);
    } else if (display !== '0' && !reMath.test(display) && button !== '.') {
      setDisplay(display + button);
    }
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
