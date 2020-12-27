import { useState } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import ButtonList from './components/ButtonList';
import styled from 'styled-components';
import { evaluate } from 'mathjs';

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
const reMath = /[/|x|+|-]+/
const reMultiple = /[/|x|+|-]{2,}/


const App = () => {
  const [display, setDisplay] = useState('0');
  const [answer, setAnswer] = useState();

  // Method to handle the display that receives the type of button as
  // a prop
  const handleDisplay = (button) => {
    // If clear button is clicked
    if (button === 'AC') {
      setDisplay('0');
      setAnswer('');
    // If equal button is clicked
    } else if (button === '=') {
      if (reMath.test(answer.slice(-1))) {
        setDisplay(evaluate(answer.slice(0, answer.length - 1  ).replace('x', '*')).toString());
      } else { 
        setDisplay(evaluate(answer.replace('x', '*')).toString());
      }
    // If a math operator is clicked
    } else if (reMath.test(button)) {
      setDisplay(button);
      // if (answer !== undefined && !reMath.test(answer.slice(-1))) {
      //   setAnswer(answer + button);
      // } else if (answer !== undefined && button === '-') {
      //   setAnswer(answer + button);
      // } else if (answer !== undefined && reMath.test(answer.slice(-1))) {
      //   setAnswer(answer.slice(0, answer.length-1) + button);
      // }
      let lastTwo = answer.slice(-2).toString();

      if (answer !== undefined && !reMath.test(answer.slice(-1))) {
        setAnswer(answer + button);
      } else if (answer !== undefined && reMultiple.test(lastTwo)) {
        setAnswer(answer.slice(0, answer.length - 2) + button);
      } else if (answer !== undefined && button === '-') {
        setAnswer(answer + button);
      } else if (answer !== undefined && reMath.test(answer.slice(-1))) {
        setAnswer(answer.slice(0, answer.length - 1) + button);
      }

    // If user clicks the decimal button and there are no other decimals in the display
    } else if (display.indexOf('.') < 0 && button === '.') {
      setDisplay(display + button);
      if (answer === undefined) {
        setAnswer(button);
      } else {
        setAnswer(answer + button);
      }
    // If the answer, zero, or a math operator is on the display 
    // and a non-zero digit is clicked
    } else if (display === '0' || reMath.test(display) || display === 'fixThisCondit') {
      setDisplay(button);
      if (answer === undefined) {
        setAnswer(button);
      } else {
        setAnswer(answer + button);
      }
    // If the display is not equal to 0, a math operator and button is not equal to decimal
    } else if (display !== '0' && !reMath.test(display) && button !== '.') {
      setDisplay(display + button);
      // if (answer === undefined) {
      //   setAnswer(button);
      // } else {
      //   setAnswer(answer + button);
      // }
      basicSet(button);
    }
  }

  const basicSet = (button) => {
    if (answer === undefined) {
      setAnswer(button);
    } else {
      setAnswer(answer + button);
    }
  }

  console.log(answer);
  
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
