import styled, { css } from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border-radius: 0.25rem;
    border: 1px solid palevioletred;
    color: palevioletred;
    margin: 0.2rem;
    padding: 0.25rem 1rem;
    font-weight: bold;

    ${props => props.big &&
    css`
        background: palevioletred;
        color: white;
    `}
`

const CalcButton = ({ id, value }) => {

    return (
        <Button id={id}>{value}</Button>
    );
}

export default CalcButton;