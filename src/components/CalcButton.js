import styled, { css } from 'styled-components';

const Button = styled.button`
    position: relative;
    background-color: transparent;
    border: none;
    outline: 1px solid palevioletred;
    color: palevioletred;
    height: 3.4rem;
    width: 4rem;
    padding: 0.25rem 1rem;
    font-weight: bold;
    cursor: pointer;

    ${props => props.wide &&
    css`
        background: palevioletred;
        color: white;
        width: 8rem;
    `}

    ${props => props.tall &&
    css`
        position: absolute;
        bottom: 0;
        background: #333;
        color: white;
        height: 6.8rem;
    `}
`

const CalcButton = ({ id, value, updateDisplay }) => {
    
    const handleClick = () => {
        if (Number.isNaN(parseInt(value))) {
            updateDisplay(id);
        } else {
            updateDisplay(value);
        }
    }

    return (
        id === 'clear' || id === 'zero'
        ? <Button onClick={handleClick} id={id} wide>{value}</Button>
        : ( 
            id === 'equals'
            ?  <Button onClick={handleClick} id={id} tall>{value}</Button>
            :  <Button onClick={handleClick} id={id}>{value}</Button>
          )
    );
}

export default CalcButton;