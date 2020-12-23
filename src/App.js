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

// Regex to search for decimals
const reDec = /[.]+/g
// Regex to search for math operators
// might have to use /[\/|x|+|-]+/g
const reMath = /[/|x|+|-]+/g


const App = () => {
  const [display, setDisplay] = useState(`0`);
  const [answer, setAnswer] = useState();

  // Method to handle the display that receives the type of button as
  // a prop
  const handleDisplay = (button) => {
    // setDisplay(button);
    // If clear button is pressed, clear answer state and display
    if (button === 'AC') {
      setDisplay(`0`);
      setAnswer(``);
    // Display answer as display
    } else if (button === '=') {
      setDisplay(`resolveAnswer`)
    // Only allow display concatenation if the button is a Number or '.' and disallow
    // more than one decimal and numbers that begin with multiple zeroes
    // need to fix case where there is a single 0 and user clicks non-zero number
    } else if ((!Number.isNaN(parseInt(button)) && !Number.isNaN(parseInt(display)) && button !== '0') || 
    (!Number.isNaN(parseInt(display)) && button === '.' && !reDec.test(display))) {
      setDisplay(display + button);
    // Math operators are the only cases left
    } else if (reMath.test(button)) {
      setDisplay(button);
      setAnswer(display + button);
      // use .replace('x', '*') to correctly multiply
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
